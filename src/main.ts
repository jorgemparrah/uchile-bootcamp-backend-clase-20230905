import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IdiomaModule } from './idiomas/idioma.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentBuilder = new DocumentBuilder()
    .setTitle('Idiomas')
    .setDescription('API para Idiomas')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder, {
    include: [ IdiomaModule ],
  });
  SwaggerModule.setup('api/idiomas', app, document);


  await app.listen(3000);
}
bootstrap();
