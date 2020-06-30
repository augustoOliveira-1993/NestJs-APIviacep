import { Module, HttpModule } from '@nestjs/common';
import { CepResolver } from './cep.resolver';
import { CepService } from './cep.service';
import { CepRepository } from './cep.repository';
import { ViacepService } from 'src/viacep/viacep.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CepSchema } from './schemas/cep.schemas';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'Cep', schema: CepSchema, collection: 'ceps' },
    ]),
  ],
  providers: [CepResolver, CepService, CepRepository, ViacepService],
})
export class CepModule {}
