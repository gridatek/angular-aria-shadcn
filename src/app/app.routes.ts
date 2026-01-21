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
  {
    path: 'tag-input',
    loadComponent: () => import('./pages/tag-input/tag-input-page'),
  },
  {
    path: 'sortable-list',
    loadComponent: () => import('./pages/sortable-list/sortable-list-page'),
  },
  {
    path: 'copy-button',
    loadComponent: () => import('./pages/copy-button/copy-button-page'),
  },
  {
    path: 'spinner',
    loadComponent: () => import('./pages/spinner/spinner-page'),
  },
  {
    path: 'timeline',
    loadComponent: () => import('./pages/timeline/timeline-page'),
  },
  {
    path: 'emoji-picker',
    loadComponent: () => import('./pages/emoji-picker/emoji-picker-page'),
  },
  {
    path: 'marquee',
    loadComponent: () => import('./pages/marquee/marquee-page'),
  },
  {
    path: 'password-input',
    loadComponent: () => import('./pages/password-input/password-input-page'),
  },
  {
    path: 'phone-input',
    loadComponent: () => import('./pages/phone-input/phone-input-page'),
  },
  {
    path: 'mention-input',
    loadComponent: () => import('./pages/mention-input/mention-input-page'),
  },
  {
    path: 'multi-select',
    loadComponent: () => import('./pages/multi-select/multi-select-page'),
  },
  {
    path: 'date-range-picker',
    loadComponent: () => import('./pages/date-range-picker/date-range-picker-page'),
  },
  {
    path: 'countdown',
    loadComponent: () => import('./pages/countdown/countdown-page'),
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./pages/infinite-scroll/infinite-scroll-page'),
  },
  {
    path: 'lightbox',
    loadComponent: () => import('./pages/lightbox/lightbox-page'),
  },
  {
    path: 'signature-pad',
    loadComponent: () => import('./pages/signature-pad/signature-pad-page'),
  },
  {
    path: 'image-compare',
    loadComponent: () => import('./pages/image-compare/image-compare-page'),
  },
  {
    path: 'audio-player',
    loadComponent: () => import('./pages/audio-player/audio-player-page'),
  },
  {
    path: 'qr-code',
    loadComponent: () => import('./pages/qr-code/qr-code-page'),
  },
  {
    path: 'video-player',
    loadComponent: () => import('./pages/video-player/video-player-page'),
  },
  {
    path: 'barcode-scanner',
    loadComponent: () => import('./pages/barcode-scanner/barcode-scanner-page'),
  },
  {
    path: 'tour-guide',
    loadComponent: () => import('./pages/tour-guide/tour-guide-page'),
  },
  {
    path: 'spotlight',
    loadComponent: () => import('./pages/spotlight/spotlight-page'),
  },
  {
    path: 'code-editor',
    loadComponent: () => import('./pages/code-editor/code-editor-page'),
  },
  {
    path: 'rich-text-editor',
    loadComponent: () => import('./pages/rich-text-editor/rich-text-editor-page'),
  },
  {
    path: 'diff-viewer',
    loadComponent: () => import('./pages/diff-viewer/diff-viewer-page'),
  },
  {
    path: 'kanban-board',
    loadComponent: () => import('./pages/kanban-board/kanban-board-page'),
  },
  {
    path: 'theme-toggle',
    loadComponent: () => import('./pages/theme-toggle/theme-toggle-page'),
  },
  {
    path: 'language-switcher',
    loadComponent: () => import('./pages/language-switcher/language-switcher-page'),
  },
  {
    path: 'timezone',
    loadComponent: () => import('./pages/timezone/timezone-page'),
  },
  {
    path: 'navbar',
    loadComponent: () => import('./pages/navbar/navbar-page'),
  },
  {
    path: 'notification-center',
    loadComponent: () => import('./pages/notification-center/notification-center-page'),
  },
  {
    path: 'pdf-viewer',
    loadComponent: () => import('./pages/pdf-viewer/pdf-viewer-page'),
  },
  {
    path: 'masonry-grid',
    loadComponent: () => import('./pages/masonry-grid/masonry-grid-page'),
  },
  {
    path: 'speed-dial',
    loadComponent: () => import('./pages/speed-dial/speed-dial-page'),
  },
  {
    path: 'org-chart',
    loadComponent: () => import('./pages/org-chart/org-chart-page'),
  },
  {
    path: 'avatar-group',
    loadComponent: () => import('./pages/avatar-group/avatar-group-page'),
  },
  {
    path: 'split-button',
    loadComponent: () => import('./pages/split-button/split-button-page'),
  },
  {
    path: 'virtual-list',
    loadComponent: () => import('./pages/virtual-list/virtual-list-page'),
  },
  {
    path: 'image-annotator',
    loadComponent: () => import('./pages/image-annotator/image-annotator-page'),
  },
  {
    path: 'confetti',
    loadComponent: () => import('./pages/confetti/confetti-page'),
  },
  {
    path: 'animated-counter',
    loadComponent: () => import('./pages/animated-counter/animated-counter-page'),
  },
  {
    path: 'dock',
    loadComponent: () => import('./pages/dock/dock-page'),
  },
];
