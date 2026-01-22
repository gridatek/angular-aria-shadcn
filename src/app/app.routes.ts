import { Routes } from '@angular/router';
import { showcaseRoutes } from './showcase/showcase.routes';

export const routes: Routes = [
  // Showcase routes (landing, dashboard, etc.)
  ...showcaseRoutes,

  // Component documentation routes under /components
  {
    path: 'components',
    loadComponent: () => import('./pages/home/home-page'),
  },
  {
    path: 'components/select',
    loadComponent: () => import('./pages/select/select-page'),
  },
  {
    path: 'components/menu',
    loadComponent: () => import('./pages/menu/menu-page'),
  },
  {
    path: 'components/dialog',
    loadComponent: () => import('./pages/dialog/dialog-page'),
  },
  {
    path: 'components/sheet',
    loadComponent: () => import('./pages/sheet/sheet-page'),
  },
  {
    path: 'components/popover',
    loadComponent: () => import('./pages/popover/popover-page'),
  },
  {
    path: 'components/tooltip',
    loadComponent: () => import('./pages/tooltip/tooltip-page'),
  },
  {
    path: 'components/collapsible',
    loadComponent: () => import('./pages/collapsible/collapsible-page'),
  },
  {
    path: 'components/alert-dialog',
    loadComponent: () => import('./pages/alert-dialog/alert-dialog-page'),
  },
  {
    path: 'components/toast',
    loadComponent: () => import('./pages/toast/toast-page'),
  },
  {
    path: 'components/hover-card',
    loadComponent: () => import('./pages/hover-card/hover-card-page'),
  },
  {
    path: 'components/navigation-menu',
    loadComponent: () => import('./pages/navigation-menu/navigation-menu-page'),
  },
  {
    path: 'components/context-menu',
    loadComponent: () => import('./pages/context-menu/context-menu-page'),
  },
  {
    path: 'components/tabs',
    loadComponent: () => import('./pages/tabs/tabs-page'),
  },
  {
    path: 'components/accordion',
    loadComponent: () => import('./pages/accordion/accordion-page'),
  },
  {
    path: 'components/command',
    loadComponent: () => import('./pages/command/command-page'),
  },
  {
    path: 'components/drawer',
    loadComponent: () => import('./pages/drawer/drawer-page'),
  },
  {
    path: 'components/progress',
    loadComponent: () => import('./pages/progress/progress-page'),
  },
  {
    path: 'components/scroll-area',
    loadComponent: () => import('./pages/scroll-area/scroll-area-page'),
  },
  {
    path: 'components/breadcrumb',
    loadComponent: () => import('./pages/breadcrumb/breadcrumb-page'),
  },
  {
    path: 'components/separator',
    loadComponent: () => import('./pages/separator/separator-page'),
  },
  {
    path: 'components/skeleton',
    loadComponent: () => import('./pages/skeleton/skeleton-page'),
  },
  {
    path: 'components/avatar',
    loadComponent: () => import('./pages/avatar/avatar-page'),
  },
  {
    path: 'components/badge',
    loadComponent: () => import('./pages/badge/badge-page'),
  },
  {
    path: 'components/switch',
    loadComponent: () => import('./pages/switch/switch-page'),
  },
  {
    path: 'components/slider',
    loadComponent: () => import('./pages/slider/slider-page'),
  },
  {
    path: 'components/toggle',
    loadComponent: () => import('./pages/toggle/toggle-page'),
  },
  {
    path: 'components/toggle-group',
    loadComponent: () => import('./pages/toggle-group/toggle-group-page'),
  },
  {
    path: 'components/input-otp',
    loadComponent: () => import('./pages/input-otp/input-otp-page'),
  },
  {
    path: 'components/checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox-page'),
  },
  {
    path: 'components/radio-group',
    loadComponent: () => import('./pages/radio-group/radio-group-page'),
  },
  {
    path: 'components/label',
    loadComponent: () => import('./pages/label/label-page'),
  },
  {
    path: 'components/input',
    loadComponent: () => import('./pages/input/input-page'),
  },
  {
    path: 'components/textarea',
    loadComponent: () => import('./pages/textarea/textarea-page'),
  },
  {
    path: 'components/card',
    loadComponent: () => import('./pages/card/card-page'),
  },
  {
    path: 'components/alert',
    loadComponent: () => import('./pages/alert/alert-page'),
  },
  {
    path: 'components/table',
    loadComponent: () => import('./pages/table/table-page'),
  },
  {
    path: 'components/pagination',
    loadComponent: () => import('./pages/pagination/pagination-page'),
  },
  {
    path: 'components/aspect-ratio',
    loadComponent: () => import('./pages/aspect-ratio/aspect-ratio-page'),
  },
  {
    path: 'components/resizable',
    loadComponent: () => import('./pages/resizable/resizable-page'),
  },
  {
    path: 'components/calendar',
    loadComponent: () => import('./pages/calendar/calendar-page'),
  },
  {
    path: 'components/date-picker',
    loadComponent: () => import('./pages/date-picker/date-picker-page'),
  },
  {
    path: 'components/button',
    loadComponent: () => import('./pages/button/button-page'),
  },
  {
    path: 'components/combobox',
    loadComponent: () => import('./pages/combobox/combobox-page'),
  },
  {
    path: 'components/carousel',
    loadComponent: () => import('./pages/carousel/carousel-page'),
  },
  {
    path: 'components/sidebar',
    loadComponent: () => import('./pages/sidebar/sidebar-page'),
  },
  {
    path: 'components/form',
    loadComponent: () => import('./pages/form/form-page'),
  },
  {
    path: 'components/tree-view',
    loadComponent: () => import('./pages/tree-view/tree-view-page'),
  },
  {
    path: 'components/dropdown-menu',
    loadComponent: () => import('./pages/dropdown-menu/dropdown-menu-page'),
  },
  {
    path: 'components/stepper',
    loadComponent: () => import('./pages/stepper/stepper-page'),
  },
  {
    path: 'components/file-upload',
    loadComponent: () => import('./pages/file-upload/file-upload-page'),
  },
  {
    path: 'components/kbd',
    loadComponent: () => import('./pages/kbd/kbd-page'),
  },
  {
    path: 'components/chart',
    loadComponent: () => import('./pages/chart/chart-page'),
  },
  {
    path: 'components/time-picker',
    loadComponent: () => import('./pages/time-picker/time-picker-page'),
  },
  {
    path: 'components/color-picker',
    loadComponent: () => import('./pages/color-picker/color-picker-page'),
  },
  {
    path: 'components/rating',
    loadComponent: () => import('./pages/rating/rating-page'),
  },
  {
    path: 'components/data-table',
    loadComponent: () => import('./pages/data-table/data-table-page'),
  },
  {
    path: 'components/number-input',
    loadComponent: () => import('./pages/number-input/number-input-page'),
  },
  {
    path: 'components/image-cropper',
    loadComponent: () => import('./pages/image-cropper/image-cropper-page'),
  },
  {
    path: 'components/tag-input',
    loadComponent: () => import('./pages/tag-input/tag-input-page'),
  },
  {
    path: 'components/sortable-list',
    loadComponent: () => import('./pages/sortable-list/sortable-list-page'),
  },
  {
    path: 'components/copy-button',
    loadComponent: () => import('./pages/copy-button/copy-button-page'),
  },
  {
    path: 'components/spinner',
    loadComponent: () => import('./pages/spinner/spinner-page'),
  },
  {
    path: 'components/timeline',
    loadComponent: () => import('./pages/timeline/timeline-page'),
  },
  {
    path: 'components/emoji-picker',
    loadComponent: () => import('./pages/emoji-picker/emoji-picker-page'),
  },
  {
    path: 'components/marquee',
    loadComponent: () => import('./pages/marquee/marquee-page'),
  },
  {
    path: 'components/password-input',
    loadComponent: () => import('./pages/password-input/password-input-page'),
  },
  {
    path: 'components/phone-input',
    loadComponent: () => import('./pages/phone-input/phone-input-page'),
  },
  {
    path: 'components/mention-input',
    loadComponent: () => import('./pages/mention-input/mention-input-page'),
  },
  {
    path: 'components/multi-select',
    loadComponent: () => import('./pages/multi-select/multi-select-page'),
  },
  {
    path: 'components/date-range-picker',
    loadComponent: () => import('./pages/date-range-picker/date-range-picker-page'),
  },
  {
    path: 'components/countdown',
    loadComponent: () => import('./pages/countdown/countdown-page'),
  },
  {
    path: 'components/infinite-scroll',
    loadComponent: () => import('./pages/infinite-scroll/infinite-scroll-page'),
  },
  {
    path: 'components/lightbox',
    loadComponent: () => import('./pages/lightbox/lightbox-page'),
  },
  {
    path: 'components/signature-pad',
    loadComponent: () => import('./pages/signature-pad/signature-pad-page'),
  },
  {
    path: 'components/image-compare',
    loadComponent: () => import('./pages/image-compare/image-compare-page'),
  },
  {
    path: 'components/audio-player',
    loadComponent: () => import('./pages/audio-player/audio-player-page'),
  },
  {
    path: 'components/qr-code',
    loadComponent: () => import('./pages/qr-code/qr-code-page'),
  },
  {
    path: 'components/video-player',
    loadComponent: () => import('./pages/video-player/video-player-page'),
  },
  {
    path: 'components/barcode-scanner',
    loadComponent: () => import('./pages/barcode-scanner/barcode-scanner-page'),
  },
  {
    path: 'components/tour-guide',
    loadComponent: () => import('./pages/tour-guide/tour-guide-page'),
  },
  {
    path: 'components/spotlight',
    loadComponent: () => import('./pages/spotlight/spotlight-page'),
  },
  {
    path: 'components/code-editor',
    loadComponent: () => import('./pages/code-editor/code-editor-page'),
  },
  {
    path: 'components/rich-text-editor',
    loadComponent: () => import('./pages/rich-text-editor/rich-text-editor-page'),
  },
  {
    path: 'components/diff-viewer',
    loadComponent: () => import('./pages/diff-viewer/diff-viewer-page'),
  },
  {
    path: 'components/kanban-board',
    loadComponent: () => import('./pages/kanban-board/kanban-board-page'),
  },
  {
    path: 'components/theme-toggle',
    loadComponent: () => import('./pages/theme-toggle/theme-toggle-page'),
  },
  {
    path: 'components/language-switcher',
    loadComponent: () => import('./pages/language-switcher/language-switcher-page'),
  },
  {
    path: 'components/timezone',
    loadComponent: () => import('./pages/timezone/timezone-page'),
  },
  {
    path: 'components/navbar',
    loadComponent: () => import('./pages/navbar/navbar-page'),
  },
  {
    path: 'components/notification-center',
    loadComponent: () => import('./pages/notification-center/notification-center-page'),
  },
  {
    path: 'components/pdf-viewer',
    loadComponent: () => import('./pages/pdf-viewer/pdf-viewer-page'),
  },
  {
    path: 'components/masonry-grid',
    loadComponent: () => import('./pages/masonry-grid/masonry-grid-page'),
  },
  {
    path: 'components/speed-dial',
    loadComponent: () => import('./pages/speed-dial/speed-dial-page'),
  },
  {
    path: 'components/org-chart',
    loadComponent: () => import('./pages/org-chart/org-chart-page'),
  },
  {
    path: 'components/avatar-group',
    loadComponent: () => import('./pages/avatar-group/avatar-group-page'),
  },
  {
    path: 'components/split-button',
    loadComponent: () => import('./pages/split-button/split-button-page'),
  },
  {
    path: 'components/virtual-list',
    loadComponent: () => import('./pages/virtual-list/virtual-list-page'),
  },
  {
    path: 'components/image-annotator',
    loadComponent: () => import('./pages/image-annotator/image-annotator-page'),
  },
  {
    path: 'components/confetti',
    loadComponent: () => import('./pages/confetti/confetti-page'),
  },
  {
    path: 'components/animated-counter',
    loadComponent: () => import('./pages/animated-counter/animated-counter-page'),
  },
  {
    path: 'components/dock',
    loadComponent: () => import('./pages/dock/dock-page'),
  },
  {
    path: 'components/search-input',
    loadComponent: () => import('./pages/search-input/search-input-page'),
  },
  {
    path: 'components/stat-card',
    loadComponent: () => import('./pages/stat-card/stat-card-page'),
  },
  {
    path: 'components/empty-state',
    loadComponent: () => import('./pages/empty-state/empty-state-page'),
  },
  {
    path: 'components/transfer-list',
    loadComponent: () => import('./pages/transfer-list/transfer-list-page'),
  },
];
