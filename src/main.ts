import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Setup Swagger documentation
  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
