import { Component } from '@angular/core';

@Component({
  selector: 'ck-count-by-x',
  templateUrl: './count-by-x.component.html',
})
export class CountByXComponent {
  message = '';

  receiveAndProcessData(data: string): void {
    const arrayData = data.replace(' ', '').split(',');

    this.countBy(parseInt(arrayData[0]), parseInt(arrayData[1]));
  }

  countBy(step: number, times: number) {
    const arrayResult = [];
    for (let i = 1; i <= times; i++) {
      arrayResult.push(i * step);
    }
    this.message = arrayResult.toString();
  }
}
