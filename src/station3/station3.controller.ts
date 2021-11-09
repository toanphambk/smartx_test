import { Controller, Get, Query } from '@nestjs/common';
import { Station3Service } from './station3.service';

@Controller('station3')
export class Station3Controller {
  constructor(private readonly station3Service: Station3Service) {}

  @Get()
  async findAll() {
    return this.station3Service.findAll();
  }

  @Get(':ocr')
  async findOne(@Query('vinNumber') vinNumber: string) {
    console.log('vinNumber', vinNumber);

    return this.station3Service.findOne(vinNumber);
  }
}
