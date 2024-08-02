import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ASantosComponent } from 'a-santos';

@Component({
  selector: 'bf-root',
  standalone: true,
  imports: [RouterOutlet, ASantosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
