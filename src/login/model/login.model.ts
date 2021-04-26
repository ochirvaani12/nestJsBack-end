import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginModel {
    @Field(type => ID)
    id: string

    @Field()
    email: string

    @Field()
    token: string
}