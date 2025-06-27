import { MediaFile } from './MediaFile';

export class VideoFile implements MediaFile {
  play(): void {
    console.log("Playing video file...");
  }
}
