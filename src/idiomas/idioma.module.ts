import { Module } from '@nestjs/common';
import { IdiomaController } from './controller/idioma.controller';

@Module({
  imports: [],
  controllers: [IdiomaController],
  providers: [],
})
export class IdiomaModule {}
