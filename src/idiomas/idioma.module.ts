import { Module } from '@nestjs/common';
import { IdiomaController } from './controller/idioma.controller';
import { AsincronoController } from './controller/asincrono.controller';

@Module({
  imports: [],
  controllers: [IdiomaController, AsincronoController],
  providers: [],
})
export class IdiomaModule {}
