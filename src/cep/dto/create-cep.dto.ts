import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CepType {
  @Field({ nullable: true })
  readonly cep: string;
  @Field({ nullable: true })
  readonly logradouro: string;
  @Field({ nullable: true })
  readonly complemento: string;
  @Field({ nullable: true })
  readonly bairro: string;
  @Field({ nullable: true })
  readonly localidade: string;
  @Field({ nullable: true })
  readonly uf: string;
  @Field({ nullable: true })
  readonly unidade: string;
  @Field({ nullable: true })
  readonly ibge: string;
  @Field({ nullable: true })
  readonly gia: string;
}
