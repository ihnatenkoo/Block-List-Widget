import { Controller, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AppService } from './app.service';

class ServerStatusDto {
  @ApiProperty()
  status: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getServerStatus(): Promise<ServerStatusDto> {
    return { status: this.appService.getServerStatus() };
  }
}
