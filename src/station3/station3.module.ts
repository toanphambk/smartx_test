import { Module } from '@nestjs/common';
import { Station3Service } from './station3.service';
import { Station3Controller } from './station3.controller';

@Module({
  controllers: [Station3Controller],
  providers: [Station3Service],
})
export class Station3Module {}
