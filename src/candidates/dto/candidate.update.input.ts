import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CandidateUpdateInput {
    @IsNotEmpty()
    @Field()
    readonly candidateNo: string;

    @IsAlpha()
    @Field()
    readonly firstName: string;

    @IsAlpha()
    @Field()
    readonly lastName: string;

    @Field()
    readonly avatar: string;

    @IsEmail()
    @Field()
    readonly email: string;

    @Field()
    readonly phone: string;

    @Field()
    readonly location: string;

    @Field()
    readonly education: string;
}