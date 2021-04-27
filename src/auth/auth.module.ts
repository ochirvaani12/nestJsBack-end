import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CandidateEntity } from "src/candidates/model/candidate.entity";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants"

@Module({
    imports: [
        TypeOrmModule.forFeature([CandidateEntity]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService],
})

export class AuthModule {}