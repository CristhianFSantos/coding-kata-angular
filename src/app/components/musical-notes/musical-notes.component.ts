import { Component } from '@angular/core';

@Component({
  selector: 'ck-musical-notes',
  templateUrl: './musical-notes.component.html',
})
export class MusicalNotesComponent {
  message = '';

  getNote(option: string): void {
    const notes = [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B',
    ];
    const length = notes.length;
    this.message = notes[((parseInt(option) % length) + length) % length];
  }
}
