import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class JobCreateInput {
    @Field()
    recruiterNo: string

    @Field()
    companyNo: string

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