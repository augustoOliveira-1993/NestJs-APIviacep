import { Injectable } from '@nestjs/common';
import { ViacepService } from 'src/viacep/viacep.service';
import { CepRepository } from './cep.repository';

@Injectable()
export class CepService {
  constructor(
    private viacep: ViacepService,
    private cepRepository: CepRepository,
  ) {}
  searchinviacep(cep: string) {
    const vCep = this.viacep.findByCep(cep);
    return vCep;
  }
  async seekAndVerify(cep: string) {
    const mongo = await this.cepRepository.findCepNameMongo(cep);
    if (mongo != null) {
      return mongo;
    }
    const git = await this.viacep.findByCep(cep);
    return await this.cepRepository.create(git);
  }
}
