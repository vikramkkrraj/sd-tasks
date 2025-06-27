import { MediaFile } from './MediaFile';

export class PDFFile implements MediaFile {
  play(): void {
    console.log("Displaying PDF document...");
  }
}
