import { Component } from '@angular/core';

@Component({
  selector: 'ck-magic-function',
  templateUrl: './magic-function.component.html',
})
export class MagicFunctionComponent {
  message: any;

  magicFunction(data: any): void {
    const acceptedTypes = ['number', 'string', 'boolean'];
    let parametersJoin = '';
    const countParameters = arguments.length;
    for (let i = 0; i < countParameters; i++) {
      if (!acceptedTypes.includes(typeof arguments[i])) {
        this.message = undefined;
        return;
      }
      parametersJoin += `${arguments[i]}-`;
    }
    this.message = parametersJoin.substring(0, parametersJoin.length - 1);
  }
}
