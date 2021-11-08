import { Module } from '@nestjs/common';
import { Station3Module } from './station3/station3.module';

@Module({
  imports: [Station3Module],
})
export class AppModule {}
