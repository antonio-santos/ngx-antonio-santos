import { Injectable, signal } from '@angular/core';

// Service to rely on Business Logic, data, and state management
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  readonly currency = signal<Currency>('USD');
}

export type Currency = 'USD' | 'GBP' | 'EUR';
