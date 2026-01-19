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
  {
    path: 'tooltip',
    loadComponent: () => import('./pages/tooltip/tooltip-page'),
  },
  {
    path: 'collapsible',
    loadComponent: () => import('./pages/collapsible/collapsible-page'),
  },
  {
    path: 'alert-dialog',
    loadComponent: () => import('./pages/alert-dialog/alert-dialog-page'),
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast-page'),
  },
  {
    path: 'hover-card',
    loadComponent: () => import('./pages/hover-card/hover-card-page'),
  },
  {
    path: 'navigation-menu',
    loadComponent: () => import('./pages/navigation-menu/navigation-menu-page'),
  },
  {
    path: 'context-menu',
    loadComponent: () => import('./pages/context-menu/context-menu-page'),
  },
];
