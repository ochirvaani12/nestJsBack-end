import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail } from 'class-validator';

@InputType()
export class RecruiterCreateInput {
    @Field()
    @IsAlpha()
    readonly firstName: string;

    @Field()
    @IsAlpha()
    readonly lastName: string;

    @IsEmail()
    @Field()
    readonly email: string;

    @Field()
    readonly avatar: string;

    @Field()
    readonly phone: string;

    @Field()
    readonly location: string;
    
    @Field({nullable: true})
    readonly createdByID?: string;
}