import { Route } from '@angular/router';

export const simulatorRoutes: Route[] = [
  {
    path: '',
    title: 'Currency Converter Page',
    loadComponent: () =>
      import('./currency-converter.component').then((c) => c.CurrencyConverter),
  },
];
