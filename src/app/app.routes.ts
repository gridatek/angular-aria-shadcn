import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page'),
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select/select-page'),
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu-page'),
  },
  {
    path: 'dialog',
    loadComponent: () => import('./pages/dialog/dialog-page'),
  },
  {
    path: 'sheet',
    loadComponent: () => import('./pages/sheet/sheet-page'),
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover-page'),
  },
];
