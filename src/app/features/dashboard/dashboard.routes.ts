import { Route } from '@angular/router';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    title: 'Dashboard Page',
    loadComponent: () =>
      import('./dashboard.component').then((c) => c.Dashboard),
  },
];
