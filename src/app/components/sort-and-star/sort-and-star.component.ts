import { Component } from '@angular/core';

@Component({
  selector: 'ck-sort-and-star',
  templateUrl: './sort-and-star.component.html',
})
export class SortAndStarComponent {
  message = '';

  receiveAndProcessData(data: string): void {
    const arrayData = data.split(',');

    console.log(arrayData);
    this.twoSort(arrayData);
  }

  twoSort(stringArray: string[]): void {
    const pattern = '***';
    const orderedArray = stringArray.sort();
    const firstItem = orderedArray[0].trim();
    const firstItemArray = firstItem.split('');

    console.log(firstItemArray);

    this.message = firstItemArray.join(pattern);
  }
}
