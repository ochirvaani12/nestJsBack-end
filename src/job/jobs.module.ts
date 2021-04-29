import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompaniesModule } from "src/company/companies.module";
import { RecruitersModule } from "src/recruiters/recruiters.module";
import { JobsResolver } from "./jobs.resolver";
import { JobsService } from "./jobs.service";
import { JobEntity } from "./model/job.entity";

@Module({
    imports: [
        RecruitersModule,
        CompaniesModule,
        TypeOrmModule.forFeature([JobEntity])
    ],
    providers: [JobsService, JobsResolver],
    exports: []
})

export class JobsModule {}