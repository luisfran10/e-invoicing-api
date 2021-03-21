import { Field, ID, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  user_name: string;

  @Field(type => String)
  user_email: string;

  @Field(type => String)
  user_password: string;

  @Field(type => String, {
    nullable: true,
    description: 'Role contains the user permissions',
  })
  user_role: string;

  @Field(type => GraphQLISODateTime, { nullable: true })
  created_at: Date;

  @Field(type => GraphQLISODateTime, { nullable: true })
  updated_at: Date;
}
