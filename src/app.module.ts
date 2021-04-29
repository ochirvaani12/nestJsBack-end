import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatesModule } from './candidates/candidates.module';
import { CompaniesModule } from './company/companies.module';
import { JobsModule } from './job/jobs.module';
import { LoginModule } from './login/login.module';
import { RecruitersModule } from './recruiters/recruiters.module';

@Module({
  imports: [
    CompaniesModule,
    CandidatesModule,
    LoginModule,
    RecruitersModule,
    JobsModule,
    TypeOrmModule.forRoot({}),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({req}) => ({ headers: req.headers }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
