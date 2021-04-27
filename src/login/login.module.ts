import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { LoginResolver } from "./login.resolver";
import { LoginService } from "./login.service";
import { LoginEntity } from "./model/login.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([LoginEntity]),
        AuthModule,
    ],
    providers: [LoginService, LoginResolver],
    exports: [LoginService, TypeOrmModule],
})

export class LoginModule {}