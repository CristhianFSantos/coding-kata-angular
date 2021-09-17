import { Component } from '@angular/core';

@Component({
  selector: 'ck-grasshopper',
  templateUrl: './grasshopper.component.html',
})
export class GrasshopperComponent {
  message = '';

  separateDataByComma(data: string): string[] {
    return data.replace(' ', '').split(',');
  }

  greet(data: string) {
    this.message = '';
    const [name, owner] = this.separateDataByComma(data);

    const messages = ['Hello boss', 'Hello guest'];

    if (name != owner) {
      this.message = messages[1];
    } else {
      this.message = messages[0];
    }
  }
}
