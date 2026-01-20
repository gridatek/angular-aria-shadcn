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
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs-page'),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion/accordion-page'),
  },
  {
    path: 'command',
    loadComponent: () => import('./pages/command/command-page'),
  },
  {
    path: 'drawer',
    loadComponent: () => import('./pages/drawer/drawer-page'),
  },
  {
    path: 'progress',
    loadComponent: () => import('./pages/progress/progress-page'),
  },
  {
    path: 'scroll-area',
    loadComponent: () => import('./pages/scroll-area/scroll-area-page'),
  },
  {
    path: 'breadcrumb',
    loadComponent: () => import('./pages/breadcrumb/breadcrumb-page'),
  },
  {
    path: 'separator',
    loadComponent: () => import('./pages/separator/separator-page'),
  },
  {
    path: 'skeleton',
    loadComponent: () => import('./pages/skeleton/skeleton-page'),
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar-page'),
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge/badge-page'),
  },
  {
    path: 'switch',
    loadComponent: () => import('./pages/switch/switch-page'),
  },
  {
    path: 'slider',
    loadComponent: () => import('./pages/slider/slider-page'),
  },
  {
    path: 'toggle',
    loadComponent: () => import('./pages/toggle/toggle-page'),
  },
  {
    path: 'toggle-group',
    loadComponent: () => import('./pages/toggle-group/toggle-group-page'),
  },
  {
    path: 'input-otp',
    loadComponent: () => import('./pages/input-otp/input-otp-page'),
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox-page'),
  },
  {
    path: 'radio-group',
    loadComponent: () => import('./pages/radio-group/radio-group-page'),
  },
  {
    path: 'label',
    loadComponent: () => import('./pages/label/label-page'),
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input-page'),
  },
  {
    path: 'textarea',
    loadComponent: () => import('./pages/textarea/textarea-page'),
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card-page'),
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert-page'),
  },
  {
    path: 'table',
    loadComponent: () => import('./pages/table/table-page'),
  },
  {
    path: 'pagination',
    loadComponent: () => import('./pages/pagination/pagination-page'),
  },
  {
    path: 'aspect-ratio',
    loadComponent: () => import('./pages/aspect-ratio/aspect-ratio-page'),
  },
  {
    path: 'resizable',
    loadComponent: () => import('./pages/resizable/resizable-page'),
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar-page'),
  },
  {
    path: 'date-picker',
    loadComponent: () => import('./pages/date-picker/date-picker-page'),
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button/button-page'),
  },
  {
    path: 'combobox',
    loadComponent: () => import('./pages/combobox/combobox-page'),
  },
  {
    path: 'carousel',
    loadComponent: () => import('./pages/carousel/carousel-page'),
  },
  {
    path: 'sidebar',
    loadComponent: () => import('./pages/sidebar/sidebar-page'),
  },
  {
    path: 'form',
    loadComponent: () => import('./pages/form/form-page'),
  },
  {
    path: 'tree-view',
    loadComponent: () => import('./pages/tree-view/tree-view-page'),
  },
  {
    path: 'dropdown-menu',
    loadComponent: () => import('./pages/dropdown-menu/dropdown-menu-page'),
  },
  {
    path: 'stepper',
    loadComponent: () => import('./pages/stepper/stepper-page'),
  },
  {
    path: 'file-upload',
    loadComponent: () => import('./pages/file-upload/file-upload-page'),
  },
  {
    path: 'kbd',
    loadComponent: () => import('./pages/kbd/kbd-page'),
  },
  {
    path: 'chart',
    loadComponent: () => import('./pages/chart/chart-page'),
  },
  {
    path: 'time-picker',
    loadComponent: () => import('./pages/time-picker/time-picker-page'),
  },
  {
    path: 'color-picker',
    loadComponent: () => import('./pages/color-picker/color-picker-page'),
  },
  {
    path: 'rating',
    loadComponent: () => import('./pages/rating/rating-page'),
  },
  {
    path: 'data-table',
    loadComponent: () => import('./pages/data-table/data-table-page'),
  },
  {
    path: 'number-input',
    loadComponent: () => import('./pages/number-input/number-input-page'),
  },
  {
    path: 'image-cropper',
    loadComponent: () => import('./pages/image-cropper/image-cropper-page'),
  },
];
