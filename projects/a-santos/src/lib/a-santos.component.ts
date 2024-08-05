import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'as-a-santos',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button mat-flat-button color="primary">a-santos works!</button>
  `,
  styles: ``,
})
export class ASantosComponent {}
