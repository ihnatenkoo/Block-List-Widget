import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
const prisma = new PrismaClient();

class HelloWorldDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<HelloWorldDto> {
    const users = await prisma.user.findMany({});
    console.log('✎ - users:', users);
    return { message: this.appService.getHello() };
  }
}
