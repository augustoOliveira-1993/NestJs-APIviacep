import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ViacepService {
  constructor(private httpService: HttpService) {}

  findByCep(cep: string) {
    const uri = process.env.VIACEP_API;
    const url = `${uri}/ws/${cep}/json/`;
    return this.httpService
      .get(url)
      .toPromise()
      .then(res => {
        const result = res.data;
        const fileds = {
          cep: result.cep,
          logradouro: result.logradouro,
          complemento: result.complemento,
          bairro: result.bairro,
          localidade: result.localidade,
          uf: result.uf,
          unidade: result.unidade,
          ibge: result.ibge,
          gia: result.gia,
        };
        return fileds;
      });
  }
}
