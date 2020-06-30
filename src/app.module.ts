import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';
import { ViacepModule } from './viacep/viacep.module';
import { CepModule } from './cep/cep.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        const { DB_HOST, DB_PORT, DB_NAME } = process.env;
        const uri = `mongodb://${DB_HOST}:${DB_PORT}`;
        return {
          uri,
          dbName: DB_NAME,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        };
      },
    }),
    ViacepModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),

    CepModule,
  ],
})
export class AppModule {}
