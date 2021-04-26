import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CandidateCreateInput {
    @Field()
    readonly firstName: string;
    @Field()
    readonly lastName: string;
    @Field()
    readonly avatar: string;
    @Field()
    readonly email: string;
    @Field()
    readonly phone: string;
    @Field()
    readonly location: string;
    @Field()
    readonly education: string;
}