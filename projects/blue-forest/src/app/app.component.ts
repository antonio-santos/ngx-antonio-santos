import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ASantosComponent } from 'a-santos';
import { CurrencySwitcherComponent } from './currency-switcher/currency-switcher.component';
import { ProductComponent } from './product/product.component';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'bf-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ASantosComponent,
    CurrencySwitcherComponent,
    ProductComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currency = inject(CurrencyService).currency;
}
