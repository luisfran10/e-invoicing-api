import { Module } from '@nestjs/common';
import { gqlProvider } from './graphql.provider';

@Module({
  imports: [...gqlProvider],
  exports: [...gqlProvider],
})
export class GraphQLConfigModule {}
