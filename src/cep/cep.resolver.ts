import { Resolver, Args, Query } from '@nestjs/graphql';
import { CepService } from './cep.service';
import { CepType } from './dto/create-cep.dto';

@Resolver(() => CepType)
export class CepResolver {
  constructor(private readonly cepService: CepService) {}
  @Query(() => CepType)
  async getCep(@Args('cep') cep: string) {
    return this.cepService.seekAndVerify(cep);
  }
  
}
