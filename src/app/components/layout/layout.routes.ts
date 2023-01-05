import { Route } from '@angular/router';

export const layoutRoutes: Route[] = [
  {
    path: 'dashboard',
    title: 'Currency Dashboard',
    loadComponent: () => import('../../features').then((c) => c.Dashboard),
  },
  {
    path: 'currency-converter',
    title: 'Currency Converter',
    loadComponent: () =>
      import('../../features').then((c) => c.CurrencyConverter),
  },
];
