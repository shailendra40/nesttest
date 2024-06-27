import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

function globalMiddlewareOne(req : Request, res : Response, next : NextFunction) {
  console.log("This is a global middleware function 1");
  next();
}

function globalMiddleWareTwo(req : Request, res : Response, next : NextFunction) {
  console.log("This is a global middleware function 2");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3000);
}
bootstrap();
