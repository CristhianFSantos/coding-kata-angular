import { Component } from '@angular/core';

@Component({
  selector: 'ck-grasshopper',
  templateUrl: './grasshopper.component.html',
})
export class GrasshopperComponent {
  message = '';

  receiveAndProcessData(data: string): void {
    const arrayData = data.replace(' ', '').split(',');

    this.greet(arrayData);
  }

  greet(names: string[]) {
    this.message = '';
    const [name, owner] = names;

    const messages = ['Hello boss', 'Hello guest'];

    if (name != owner) {
      this.message = messages[1];
    } else {
      this.message = messages[0];
    }
  }
}
