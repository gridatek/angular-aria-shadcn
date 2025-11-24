# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 21 application showcasing examples of Angular Aria components with Tailwind CSS styling. The project demonstrates accessible UI components using `@angular/aria` and `@angular/cdk` packages, serving as a component library exploration and example repository.

## Development Commands

### Core Commands
- `npm start` - Start development server at http://localhost:4200/
- `npm run build` - Production build (outputs to dist/)
- `npm run watch` - Development build with watch mode
- `npm test` - Run unit tests (note: test generation is disabled by default)

### Angular CLI Commands
- `ng generate component component-name` - Generate new component (inline template/style by default)
- `ng generate directive|pipe|service|class|guard|interface|interceptor|resolver name` - Generate other Angular artifacts
- `ng generate --help` - List all available schematics

## Project Configuration

### Angular Schematics Defaults
The project has specific defaults configured in `angular.json`:
- **All schematics**: Tests are skipped by default (`skipTests: true`)
- **Components**: Generated with inline templates and inline styles
- **Component prefix**: `app-`
- **Build budgets**:
  - Initial bundle: 500kB warning, 1MB error
  - Component styles: 4kB warning, 8kB error

### TypeScript Configuration
Strict mode is enabled with additional strict checks:
- `strict: true`
- `noImplicitOverride: true`
- `noPropertyAccessFromIndexSignature: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`
- `strictTemplates: true` (Angular compiler)
- `strictInjectionParameters: true`
- `strictInputAccessModifiers: true`

### Prettier Configuration
- Print width: 100 characters
- Single quotes: true
- HTML files use Angular parser

## Architecture

### Component Structure
All example components are located in `src/app/examples/` organized by component type:
- `accordion/` - Multi-expansion, single-expansion, disabled-focusable examples
- `autocomplete/` - Autocomplete component example
- `listbox/` - Listbox selection component
- `select/` - Select dropdown component
- `menubar/` - Complex menubar with nested menus
- `multiselect/` - Multi-selection component
- `toolbar/` - Toolbar component example

Each example component uses:
- External template file (`templateUrl`)
- External CSS file (`styleUrl`)
- Imports from `@angular/aria/*` and `@angular/cdk/*`
- Standalone components (no NgModules)

### Styling Approach
- **Global styles**: `src/styles.css` imports `@angular/cdk/overlay-prebuilt.css` and Tailwind CSS
- **Component styles**: Each example has its own CSS file with component-specific styling
- **Tailwind CSS v4.1+**: PostCSS-based configuration (no separate config file)
- Components use external CSS files rather than inline styles for maintainability

### Angular Aria Integration
Components demonstrate proper use of Angular Aria directives:
- Accordion: `AccordionGroup`, `AccordionTrigger`, `AccordionPanel`, `AccordionContent`
- Menu: `MenuBar`, `Menu`, `MenuContent`, `MenuItem` with CDK overlays
- Listbox/Select: `Listbox`, `Option` components
- Toolbar: Toolbar component with proper ARIA semantics

### Signals Pattern
Example components use Angular signals for reactive state:
- `signal()` for component state
- `viewChild()` for querying child components/directives
- Components implement `ChangeDetectionStrategy.OnPush` for performance

## Important Notes

- **No test setup**: The project skips test generation. If adding tests, you'll need to set up testing infrastructure first.
- **Standalone-only**: This project uses only standalone components; do not create or use NgModules.
- **CDK Overlays**: When using menu components, ensure `@angular/cdk/overlay-prebuilt.css` is imported in global styles.
- **Router**: Routes are defined in `src/app/app.routes.ts` (currently empty).
- **Package Manager**: Uses npm 11.5.2 (specified in package.json).
