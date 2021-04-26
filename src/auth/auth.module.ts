import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { CandidatesModule } from "src/candidates/candidates.module";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants"

@Module({
    imports: [
        forwardRef(() => CandidatesModule),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService],
})

export class AuthModule {}