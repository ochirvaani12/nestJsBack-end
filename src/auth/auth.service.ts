import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { CandidateEntity } from "src/candidates/model/candidate.entity";
import { CandidateModel } from "src/candidates/model/candidate.model";
import { Repository } from "typeorm";
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectRepository(CandidateEntity) private candidatesRepository: Repository<CandidateEntity>,
    ) {}
    
    async generateJWT(email: string): Promise<string>{
        const candidate = await this.getCandidateByEmail(email);
        const token = this.jwtService.sign({
            candidateNo: candidate.candidateNo,
            firstName: candidate.firstName,
            lastName: candidate.lastName,
            avatar: candidate.avatar,
            phone: candidate.phone,
            education: candidate.education,
            location: candidate.location,
        });
        return token;
    }


    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async comparePassword(newPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(newPassword, hashedPassword);
    }

    async getCandidateByEmail(email: string): Promise<CandidateModel> {
        return await this.candidatesRepository.findOneOrFail({email: email});
    }
}