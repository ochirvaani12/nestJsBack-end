import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginModule } from "src/login/login.module";
import { RecruiterEntity } from "./model/recruiter.entity";
import { RecruitersResolver } from "./recruiters.resolver";
import { RecruitersService } from "./recruiters.service";

@Module({
    imports: [
        LoginModule,
        TypeOrmModule.forFeature([RecruiterEntity])
    ],
    providers: [RecruitersService, RecruitersResolver],
    exports: [RecruitersService],
})

export class RecruitersModule {}