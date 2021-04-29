import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CompanyCreateInput {
    @Field()
    name: string

    @Field()
    logo: string

    @Field()
    about: string

    @Field()
    recruiterNo: string
}