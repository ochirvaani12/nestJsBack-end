import { Field, ID, ObjectType } from "@nestjs/graphql";
import { LoginModel } from "src/login/model/login.model";

@ObjectType()
export class RecruiterModel {
    @Field(() => ID)
    recruiterNo: string

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    email: string;

    @Field(() => LoginModel, {nullable: true})
    login?: LoginModel 

    @Field()
    avatar: string

    @Field()
    phone: string

    @Field()
    location: string

    @Field({nullable: true})
    createdByID?: string

    @Field(() => RecruiterModel, {nullable: true})
    createdBy?: RecruiterModel
}