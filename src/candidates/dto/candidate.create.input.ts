import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail } from 'class-validator';

@InputType()
export class CandidateCreateInput {
    @Field()
    @IsAlpha()
    readonly firstName: string;

    @Field()
    @IsAlpha()
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