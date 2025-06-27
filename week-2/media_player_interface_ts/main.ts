import { MediaPlayer } from './MediaPlayer';
import { AudioFile } from './AudioFile';
import { VideoFile } from './VideoFile';
import { PDFFile } from './PDFFile';

const audioPlayer = new MediaPlayer(new AudioFile());
audioPlayer.playMedia(); // Playing audio file...

const videoPlayer = new MediaPlayer(new VideoFile());
videoPlayer.playMedia(); // Playing video file...

const pdfPlayer = new MediaPlayer(new PDFFile());
pdfPlayer.playMedia(); // Displaying PDF document...
