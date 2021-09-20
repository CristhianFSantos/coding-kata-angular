import { Component } from '@angular/core';

@Component({
  selector: 'ck-ensure-question',
  templateUrl: './ensure-question.component.html',
})
export class EnsureQuestionComponent {
  message = '';

  ensureQuestion(message: string): void {
    this.message =
      message.substring(message.length - 1) === '?' ? message : `${message}?`;
  }
}
