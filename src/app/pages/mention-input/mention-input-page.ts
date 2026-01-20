import { Component } from '@angular/core';
import { ScMentionInputDemo } from '../../examples/mention-input';

@Component({
  selector: 'app-mention-input-page',
  imports: [ScMentionInputDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Mention Input</h1>
        <p class="text-muted-foreground">
          Text input with &#64;mention support for users, channels, or custom entities.
        </p>
      </div>
      <sc-mention-input-demo />
    </div>
  `,
})
export default class MentionInputPage {}
