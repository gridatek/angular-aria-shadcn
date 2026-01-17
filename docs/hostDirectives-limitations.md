# Angular hostDirectives and Content Projection Limitations

## The Problem

When using `hostDirectives` on a component that uses `<ng-content>` for content projection, **projected content cannot access the host directive via dependency injection**.

### Example Structure

```typescript
// ScSelect component with hostDirectives
@Component({
  selector: 'div[sc-select]',
  hostDirectives: [Combobox],
  template: `<ng-content />`,
})
export class ScSelect {}

// Consumer template
<div sc-select>
  <input ngComboboxInput />  <!-- Cannot inject Combobox from hostDirectives! -->
</div>
```

### Why It Doesn't Work

Angular's dependency injection for projected content uses the **original injection context** (where the content was declared), not the injection context of the component it's projected into.

> "Projected content was not affected with the directives providers... projected content takes injection from the parent"

This means:

- `ComboboxInput` looks for `Combobox` in `ScSelectDemo`'s injector (where it was declared)
- It does NOT look in `ScSelect`'s injector (where it's projected)
- The `Combobox` from `hostDirectives` on `ScSelect` is invisible to projected content

## What We Tried (And Failed)

### 1. Using `providers` to re-provide the Combobox

```typescript
@Component({
  hostDirectives: [Combobox],
  providers: [
    {
      provide: Combobox,
      useFactory: () => inject(Combobox, { skipSelf: true }),
    },
  ],
})
```

**Result**: Doesn't work - content children still can't access it.

### 2. Using `Injector` in factory

```typescript
providers: [
  {
    provide: Combobox,
    useFactory: (injector: Injector) => injector.get(Combobox),
    deps: [Injector],
  },
],
```

**Result**: Doesn't work - same limitation.

### 3. Using `viewChild` to query for the directive

```typescript
combobox = viewChild<Combobox>(Combobox);
```

**Result**: Can find the Combobox from hostDirectives, but the actual interaction (ComboboxInput → Combobox) doesn't work because they're not connected via DI.

## Working Solutions

### Solution 1: Add directive directly in consumer template (Recommended)

```html
<div sc-select ngCombobox readonly>
  <input ngComboboxInput />
</div>
```

**Pros**:

- Works correctly
- Full DI connectivity between ComboboxInput and Combobox

**Cons**:

- Consumer must add `ngCombobox` attribute
- Less encapsulated API

### Solution 2: Don't use content projection

Make `ScSelect` a fully self-contained component with its own template instead of using `<ng-content>`.

```typescript
@Component({
  selector: 'sc-select',
  hostDirectives: [Combobox],
  template: `
    <input ngComboboxInput />
    <!-- All combobox structure here -->
  `,
})
export class ScSelect {}
```

**Pros**:

- Full encapsulation
- `hostDirectives` works correctly

**Cons**:

- Less flexible for consumers
- May need many `@Input()` props for customization

### Solution 3: Use template outlets with context

Instead of `<ng-content>`, use `<ng-template>` with explicit context passing.

## Related Angular Issues

- [hostDirectives Inheritance Issue #51203](https://github.com/angular/angular/issues/51203) - `hostDirectives` doesn't provide directives properly with inheritance
- [Using hostDirectives leads to NG0309 #48128](https://github.com/angular/angular/issues/48128) - Duplicate directive errors when composing
- [forwardRef Not Working with hostDirectives #58485](https://github.com/angular/angular/issues/58485) - Issues with forwardRef in hostDirectives
- [Original Host Directives Proposal #8785](https://github.com/angular/angular/issues/8785) - The original feature request

## Official Documentation

- [Directive Composition API](https://angular.dev/guide/directives/directive-composition-api)
- [Hierarchical Dependency Injection](https://angular.dev/guide/di/hierarchical-dependency-injection)
- [Content Projection](https://angular.dev/guide/components/content-projection)

## Key Takeaways

1. **`hostDirectives` works well for view children** (elements in the component's own template)
2. **`hostDirectives` does NOT work for content children** (elements projected via `<ng-content>`)
3. **`providers` and `viewProviders` cannot bridge this gap** - it's a fundamental DI behavior
4. **The workaround is to apply the directive in the consumer's template** where the content is declared
