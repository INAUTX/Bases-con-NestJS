import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//ValidationPipe
import { ValidationPipe } from '@nestjs/common';
//filter
import { HttpErrorFilter } from './filters/http-error.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Pipe
  app.useGlobalFilters(new HttpErrorFilter()); // Filter
  await app.listen(3000);
}
bootstrap();


