import { Component } from '@angular/core';

@Component({
  selector: 'ck-alternating-case',
  templateUrl: './alternating-case.component.html',
})
export class AlternatingCaseComponent {
  message = '';

  toAlternatingCase(message: string): void {
    this.message = [...message]
      .map((char) =>
        /^[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()
      )
      .join('');
  }
}
