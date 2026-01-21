# AngularAriaShadcn

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## Architecture

### Project Structure

```
src/
├── app/
│   ├── ui/                     # Reusable UI components
│   │   └── {component}/
│   │       ├── sc-{component}.ts   # Component implementation
│   │       ├── index.ts            # Public exports
│   │       └── README.md           # Component documentation
│   ├── examples/               # Demo implementations
│   │   └── {component}/
│   │       └── sc-{component}-demo.ts
│   ├── pages/                  # Route page components
│   │   └── {component}/
│   │       └── {component}-page.ts
│   ├── app.ts                  # Root component
│   ├── app.routes.ts           # Route definitions (lazy-loaded)
│   ├── app.config.ts           # Application configuration
│   └── utils.ts                # Shared utility functions
├── styles.css                  # Global styles and theme variables
├── main.ts                     # Application bootstrap
└── index.html                  # HTML entry point
```

### Component Patterns

Components follow these conventions:

- **Standalone components** - No NgModules (Angular 20+ default)
- **Signals for state** - Use `signal()`, `computed()`, and `model()` for state management
- **Host bindings** - Use `host` object in decorator instead of `@HostBinding`/`@HostListener`
- **OnPush change detection** - All components use `ChangeDetectionStrategy.OnPush`
- **Directive pattern** - UI primitives are often implemented as directives applied to native elements
- **Class composition** - Use `cn()` utility (clsx + tailwind-merge) for dynamic class composition

### Theming

The project uses CSS custom properties (CSS variables) for theming:

- Light theme variables defined in `:root`
- Dark theme variables defined in `.dark` class
- Theme is toggled by adding/removing `.dark` class on the document root
- `ScThemeService` manages theme state with localStorage persistence
- System preference detection via `prefers-color-scheme` media query

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **OKLCH color space** - Modern color format for better perceptual uniformity
- **CSS variables** - Theme tokens mapped to Tailwind colors via `@theme` directive

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
