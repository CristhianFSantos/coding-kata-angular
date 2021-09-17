import { Component } from '@angular/core';

@Component({
  selector: 'ck-magic-function',
  templateUrl: './magic-function.component.html',
})
export class MagicFunctionComponent {
  message: any;

  receiveAndProcessData(data: string): void {
    const arrayData = data.replace(' ', '').split(',');

    this.magicFunction(arrayData);
  }

  magicFunction(data: any): void {
    const acceptedTypes = ['number', 'string', 'boolean'];
    let parametersJoin = '';
    const countParameters = data.length;

    for (let i = 0; i < countParameters; i++) {
      if (!acceptedTypes.includes(typeof data[i])) {
        this.message = undefined;
        return;
      }
      parametersJoin += `${data[i]}-`;
    }
    this.message = parametersJoin.substring(0, parametersJoin.length - 1);
  }
}
