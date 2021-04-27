import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LoginInput } from "./dto/login.input";
import { LoginService } from "./login.service";
import { LoginModel } from "./model/login.model";

@Resolver()
export class LoginResolver {
    constructor( private readonly loginService: LoginService) {}

    @Mutation(() => LoginModel)
    async finishingRegister(@Args('email') email: string, @Args('password') password: string) {
        return await this.loginService.finishingRegister(email, password);
    }

    @Query(() => LoginModel)
    async login(@Args('loginInput') loginInput: LoginInput) {
        return await this.loginService.login(loginInput);
    }

    @Query(() => LoginModel)
    async getLoginData(@Args('email') email: string) {
        return await this.loginService.getLoginData(email);
    }
}