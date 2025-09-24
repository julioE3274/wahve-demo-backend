import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private allTraits = ['Adaptability', 'Empathy', 'Harmony', 'Discipline', 'Focus'];

  getScore(jobTraitRanking: string[], applicantTraitRanking: string[]) {

    if (!jobTraitRanking?.length || !applicantTraitRanking?.length) {
      return 0;
    }

    let score = 0;
    const maxScore = this.allTraits.length * this.allTraits.length;

    this.allTraits.forEach(trait => {
      const jobI = jobTraitRanking.indexOf(trait);
      const applicantI = applicantTraitRanking.indexOf(trait);

      if (jobI < 0 || applicantI < 0) {
        return;
      }

      const distance = Math.abs(jobI - applicantI);
      score = score + (this.allTraits.length - distance);
    });

    return score / maxScore;
  }
}
