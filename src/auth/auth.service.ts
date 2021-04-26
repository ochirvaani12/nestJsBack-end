import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CandidatesService } from "../candidates/candidates.service";
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly candidatesService: CandidatesService
    ) {}
    
    async generateJWT(email: string): Promise<string>{
        const candidate = await this.candidatesService.getCandidateByEmail(email);
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
}