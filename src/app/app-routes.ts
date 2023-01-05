import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/layout/layout.component').then((m) => m.Layout),
    loadChildren: () =>
      import('./components/layout/layout.routes').then((m) => m.layoutRoutes),
  },
];
