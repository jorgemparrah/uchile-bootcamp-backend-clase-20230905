import { Module } from '@nestjs/common';
import { IdiomaModule } from './idiomas/idioma.module';

@Module({
  imports: [ IdiomaModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
