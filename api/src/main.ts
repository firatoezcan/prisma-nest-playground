import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { PrismaService } from "@/api/services/Prisma.service";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const fastify = new FastifyAdapter();

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastify);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  const config = new DocumentBuilder().setTitle("JSON Resume").setDescription("Standarized resumes").setVersion("1.0").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  app.enableCors({
    origin: ["http://localhost:3000", "http://localhost:3002"],
  });
  await app.listen(3001);
  console.log("Swagger Docs: http://localhost:3001/swagger");
}
bootstrap();
