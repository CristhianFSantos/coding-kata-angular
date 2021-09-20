import { Component } from '@angular/core';

@Component({
  selector: 'ck-avoiding-false-values',
  templateUrl: './avoiding-false-values.component.html',
})
export class AvoidingFalseValuesComponent {
  message: any;

  receiveAndProcessData(data: string): void {
    const arrayData = data.replace(' ', '').split(',');
    this.sum(parseInt(arrayData[0]), parseInt(arrayData[1]));
  }

  sum(numberOne: number, NumberTwo: number): void {
    const argumentsArray = [numberOne, NumberTwo];

    let result = 0;
    for (let i = 0; i < argumentsArray.length; i++) {
      if (!Boolean(argumentsArray[i]) && argumentsArray[i] === 0) {
        result += argumentsArray[i];
      } else if (Boolean(argumentsArray[i])) {
        result += argumentsArray[i];
      } else {
        this.message = undefined;
        return;
      }
    }
    this.message = result;
  }
}
