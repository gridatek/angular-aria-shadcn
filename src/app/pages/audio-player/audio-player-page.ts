import { Component } from '@angular/core';
import { ScAudioPlayerDemo } from '../../examples/audio-player';

@Component({
  selector: 'app-audio-player-page',
  imports: [ScAudioPlayerDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Audio Player</h1>
        <p class="text-muted-foreground">
          Feature-rich audio player with playlist support, shuffle, and repeat.
        </p>
      </div>
      <sc-audio-player-demo />
    </div>
  `,
})
export default class AudioPlayerPage {}
