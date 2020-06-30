import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cep } from './interfaces/cep.interfaces';

Injectable();
export class CepRepository {
  constructor(@InjectModel('Cep') private readonly cepModel: Model<Cep>) {}

  async create(createDB: any): Promise<Cep> {
    const createdCep = new this.cepModel(createDB);
    return createdCep.save();
  }
  async findCepNameMongo(cep: string): Promise<Cep> {
    return await this.cepModel.findOne({ cep }).exec();
  }
}
