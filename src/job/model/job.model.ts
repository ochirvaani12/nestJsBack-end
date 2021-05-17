import { Field, ObjectType } from "@nestjs/graphql";
import { CompanyModel } from "src/company/model/company.model";
import { RecruiterModel } from "src/recruiters/model/recruiter.model";

@ObjectType()
export class JobModel {
    @Field()
    jobNo: string

    @Field()
    recruiterNo: string

    @Field(() => RecruiterModel, {nullable: true})
    recruiter?: RecruiterModel

    @Field()
    companyNo: string

    @Field(() => CompanyModel, {nullable: true})
    company?: CompanyModel

    @Field()
    jobTitle: string

    @Field()
    location: string

    @Field()
    industry: string

    @Field()
    jobDescription: string

    @Field()
    qualification: string

    @Field()
    requirements: string

    @Field()
    postDate: Date
}