import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

export const setupSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('NestJS Tutorial Tamil API')
    .setDescription('The First Project API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  writeFileSync('./swagger-spec.json', JSON.stringify(document));

  SwaggerModule.setup('docs', app, document);
};
