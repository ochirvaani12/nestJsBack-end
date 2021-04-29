import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CompanyUpdateInput {
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
}