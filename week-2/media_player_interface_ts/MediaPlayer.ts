import { MediaFile } from './MediaFile';

export class MediaPlayer {
  constructor(private media: MediaFile) {}

  playMedia(): void {
    this.media.play();
  }
}
