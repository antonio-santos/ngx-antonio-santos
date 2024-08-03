import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'as-a-santos',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <p>a-santos works!</p>
    <button mat-flat-button color="primary">Primary</button>
  `,
  styles: ``,
})
export class ASantosComponent {}
