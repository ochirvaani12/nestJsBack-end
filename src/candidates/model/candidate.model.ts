import { Field, ID, ObjectType } from "@nestjs/graphql";
import { LoginModel } from "src/login/model/login.model";

@ObjectType()
export class CandidateModel {
    @Field(type => ID)
    candidateNo: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field()
    avatar: string;

    @Field()
    phone: string;

    @Field()
    location: string;

    @Field()
    education: string;

    @Field(type => LoginModel, {nullable: true})
    login? = LoginModel
} 