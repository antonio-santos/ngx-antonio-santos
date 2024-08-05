import { Component, inject } from '@angular/core';
import { Currency, CurrencyService } from '../services/currency.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'bf-currency-switcher',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './currency-switcher.component.html',
  styleUrl: './currency-switcher.component.css',
})
export class CurrencySwitcherComponent {
  currencies: Currency[] = ['USD', 'GBP', 'EUR'];
  currency = inject(CurrencyService).currency;
}

