import { MediaFile } from './MediaFile';

export class AudioFile implements MediaFile {
  play(): void {
    console.log("Playing audio file...");
  }
}
