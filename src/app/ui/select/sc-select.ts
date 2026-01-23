import { Combobox } from '@angular/aria/combobox';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { SIGNAL, signalSetFn } from '@angular/core/primitives/signals';
import { cn } from '../../utils';
import { ScSelectContent } from './sc-select-content';
import { ScSelectTrigger } from './sc-select-trigger';

@Component({
  selector: 'div[sc-select]',
  imports: [Combobox],
  hostDirectives: [Combobox],
  template: `<ng-content />`,
  host: {
    'data-slot': 'select',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelect {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = model<any>(null);
  readonly disabled = input<boolean>(false);

  private readonly trigger = contentChild(ScSelectTrigger);
  private readonly content = contentChild(ScSelectContent, { descendants: true });

  readonly origin = computed(() => this.trigger()?.overlayOrigin);
  readonly values = computed(() => this.content()?.listbox.values() ?? []);
  readonly displayValue = computed(() => {
    const vals = this.values();
    return vals.length > 0 ? String(vals[0]) : '';
  });

  protected readonly class = computed(() => cn('relative', this.classInput()));

  private readonly combobox = inject(Combobox);

  constructor() {
    effect(() => signalSetFn(this.combobox.readonly[SIGNAL], true));

    // Sync external value to listbox values
    effect(() => {
      const val = this.value();
      const content = this.content();
      if (content) {
        // We only support single selection for now in this sync
        content.listbox.values.set(val !== null && val !== undefined ? [val] : []);
      }
    });

    // Sync listbox values to external value
    effect(
      () => {
        const content = this.content();
        if (content) {
          const vals = content.listbox.values();
          if (vals.length > 0) {
            this.value.set(vals[0]);
          }
        }
      },
      { allowSignalWrites: true },
    );
  }
}
