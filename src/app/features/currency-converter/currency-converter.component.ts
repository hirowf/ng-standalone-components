import { Component } from '@angular/core';
import { PageTitle } from 'src/app/components/page-title/page-title.component';

@Component({
  selector: 'currency-converter',
  standalone: true,
  template: ` <page-title title="Currency Converter"></page-title> `,
  imports: [PageTitle],
})
export class CurrencyConverter {}
