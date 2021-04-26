import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatesModule } from './candidates/candidates.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    CandidatesModule,
    LoginModule,
    TypeOrmModule.forRoot({}),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({req}) => ({ headers: req.headers }),
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
