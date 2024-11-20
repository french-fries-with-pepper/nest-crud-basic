import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const API_PREFIX = configService.get('app-config.API_PREFIX');
  const API_VERSION = configService.get('app-config.API_VERSION');
  app.setGlobalPrefix(`${API_PREFIX}${API_VERSION}`);

  const HTTP_PORT = configService.getOrThrow('app-config.HTTP_PORT');

  await app.listen(HTTP_PORT);
}
bootstrap();
