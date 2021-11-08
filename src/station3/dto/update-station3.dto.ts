import { PartialType } from '@nestjs/mapped-types';
import { CreateStation3Dto } from './create-station3.dto';

export class UpdateStation3Dto extends PartialType(CreateStation3Dto) {}
