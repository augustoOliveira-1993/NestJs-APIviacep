import { Document } from 'mongoose';

export interface Cep extends Document {
  readonly cep: string;
  readonly logradouro: string;
  readonly complemento: string;
  readonly bairro: string;
  readonly localidade: string;
  readonly uf: string;
  readonly unidade: string;
  readonly ibge: string;
  readonly gia: string;
}
