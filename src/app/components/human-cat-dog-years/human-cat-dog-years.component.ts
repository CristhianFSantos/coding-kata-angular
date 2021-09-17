import { Component } from '@angular/core';

@Component({
  selector: 'ck-human-cat-dog-years',
  templateUrl: './human-cat-dog-years.component.html',
})
export class HumanCatDogYearsComponent {
  message = '';

  humanYearsCatYearsDogYears(humanYears: number): void {
    const totalYears = [humanYears, 0, 0];
    let validFirst = true;
    for (let i = humanYears; i > 0; i--) {
      if (validFirst) {
        totalYears[1] = totalYears[2] = 15;
      }
      if (i === humanYears - 1) {
        totalYears[1] = totalYears[2] += 9;
        validFirst = false;
      } else if (!validFirst) {
        totalYears[1] += 4;
        totalYears[2] += 5;
      }
    }
    this.message = `[${totalYears.toString()}]`;
  }
}
