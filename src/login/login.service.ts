import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "src/auth/auth.service";
import { Repository } from "typeorm";
import { LoginInput } from "./dto/login.input";
import { LoginEntity } from "./model/login.entity";
import { LoginModel } from "./model/login.model";

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(LoginEntity) private loginRepository: Repository<LoginEntity>,
        private readonly authService: AuthService,
    ) {}

    async finishingRegister(email: string, password: string): Promise<LoginModel> {
        const newLogin = new LoginEntity();
        newLogin.email = email;
        newLogin.password = await this.authService.hashPassword(password);
        await this.loginRepository.save(newLogin);
        const returnLogin = new LoginModel();
        returnLogin.id = newLogin.id;
        returnLogin.email = newLogin.email;
        returnLogin.token = await this.authService.generateJWT(email);
        return returnLogin;
    }

    async getLoginData(email: string): Promise<LoginModel> {
        const loginData = await this.loginRepository.findOne({email: email});
        if(loginData) {
            const login = new LoginModel();
            login.id = loginData.id;
            login.email = loginData.email;
            login.token = await this.authService.generateJWT(loginData.email);
            return login;
        }
    }

    async login(loginInput: LoginInput): Promise<LoginModel> {
        const login = await this.loginRepository.findOneOrFail({email: loginInput.email});
        const validation = await this.authService.comparePassword(loginInput.password, login.password);
        if(validation) {
            const returnLogin = new LoginModel();
            returnLogin.id = login.id;
            returnLogin.email = login.email;
            returnLogin.token = await this.authService.generateJWT(login.email);
            return returnLogin;
        }
    }


}