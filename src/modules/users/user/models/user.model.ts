import { Field, ID, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;

  @Field(type => String, {
    nullable: true,
    description: 'Role contains the user permissions',
  })
  role: string;

  @Field(type => GraphQLISODateTime, { nullable: true })
  created_at: Date;

  @Field(type => GraphQLISODateTime, { nullable: true })
  updated_at: Date;
}
