import { Injectable } from '@nestjs/common';
import { CreateStation3Dto } from './dto/create-station3.dto';
import { UpdateStation3Dto } from './dto/update-station3.dto';
import { CarReport } from './interface/car-report.interface';

@Injectable()
export class Station3Service {
  private readonly testData: CarReport[] = [
    {
      vinNumber: 'RPXCA2FACMV020875',
      batchNo: new Date(2021, 10, 4),
      sequence: 3208,
      manufactureYear: new Date(2021),
      country: 'VIETNAM',
      bodyColor: 'GYA',
      wheel: 15,
      Variant: 'Preminum',
      model: 'FADIL A5A2CLFVN',
      mirror: 'BIG',
      wheels: 'Black/Gray 15',
      pilar_black_paint: true,
      tailLight: 'LED',
    },
    {
      vinNumber: 'RPXCA2FACMV020870',
      batchNo: new Date(2021, 10, 4),
      sequence: 3191,
      manufactureYear: new Date(2021),
      country: 'VIETNAM',
      bodyColor: 'GYA',
      wheel: 15,
      Variant: 'BASE',
      model: 'FADIL A5A2CLFVN',
      mirror: 'SMALL',
      wheels: '15',
      pilar_black_paint: false,
      tailLight: 'HALOGEN',
    },
    {
      vinNumber: 'RPXCA2FACMV015497',
      batchNo: new Date(2021, 10, 2),
      sequence: 2700,
      manufactureYear: new Date(2021),
      country: 'VIETNAM',
      bodyColor: 'GYA',
      wheel: 15,
      Variant: 'PLUS',
      model: 'FADIL A5A2CLFVN',
      mirror: 'BIG',
      wheels: 'Black/Gray 15',
      pilar_black_paint: true,
      tailLight: 'HALOGEN',
    },
  ];

  findAll() {
    return this.testData;
  }

  findOne(vinNumber: string) {
    const found = this.testData.find((e) => {
      return e.vinNumber == vinNumber;
    });
    console.log('found', found);
    if (found) {
      return found;
    }
    return {};
  }
}
