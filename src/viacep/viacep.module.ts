import { Module, HttpModule } from '@nestjs/common';
import { ViacepService } from './viacep.service';

@Module({
  imports: [HttpModule],
  providers: [ViacepService],
})
export class ViacepModule {}
