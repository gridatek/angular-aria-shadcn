import { Component } from '@angular/core';
import { ScEmojiPickerDemo } from '../../examples/emoji-picker';

@Component({
  selector: 'app-emoji-picker-page',
  imports: [ScEmojiPickerDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Emoji Picker</h1>
        <p class="text-muted-foreground">
          A searchable emoji picker with categories and recently used emojis.
        </p>
      </div>
      <sc-emoji-picker-demo />
    </div>
  `,
})
export default class EmojiPickerPage {}
