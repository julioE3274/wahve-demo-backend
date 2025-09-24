import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getScore(@Query('jobTraitRanking') jobTraitRanking: string[], @Query('applicantTraitRanking') applicantTraitRanking: string[]) {
    return this.appService.getScore(jobTraitRanking, applicantTraitRanking);
  }
}
