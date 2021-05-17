import { Field, ObjectType } from "@nestjs/graphql";
import { RecruiterModel } from "src/recruiters/model/recruiter.model";

@ObjectType()
export class CompanyModel {
    @Field()
    companyNo: string

    @Field()
    name: string

    @Field()
    logo: string

    @Field()
    about: string

    @Field()
    recruiterNo: string

    @Field(() => RecruiterModel, {nullable: true})
    recruiter?: RecruiterModel
}