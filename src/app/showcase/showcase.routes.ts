import { Routes } from '@angular/router';

export const showcaseRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing-page'),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard-page'),
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users-page'),
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings-page'),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login-page'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register-page'),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery-page'),
  },
];
