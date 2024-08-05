import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Currency } from '../services/currency.service';

@Component({
  selector: 'bf-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // This is a Signal based component
  name = input.required<string>();
  price = input.required<number>();
  currency = input.required<Currency>();
}
