import { Component } from '@angular/core';
import { ScVideoPlayerDemo } from '../../examples/video-player';

@Component({
  selector: 'app-video-player-page',
  imports: [ScVideoPlayerDemo],
  template: `
    <div class="container py-10">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Video Player</h1>
        <p class="text-muted-foreground">
          Full-featured HTML5 video player with custom controls, keyboard shortcuts, and fullscreen
          support.
        </p>
      </div>
      <sc-video-player-demo />
    </div>
  `,
})
export default class VideoPlayerPage {}
