import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginModule } from "src/login/login.module";
import { CandidatesResolver } from "./candidates.resolver";
import { CandidatesService } from "./candidates.service";
import { CandidateEntity } from "./model/candidate.entity";

@Module({
    imports: [
        LoginModule,
        TypeOrmModule.forFeature([CandidateEntity])
    ],
    providers: [CandidatesService, CandidatesResolver],
    exports: []
})
export class CandidatesModule {}