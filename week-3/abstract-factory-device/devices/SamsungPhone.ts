import { Device } from '../Device';

export class SamsungPhone implements Device {
  specifications(): void {
    console.log("Samsung Phone: Galaxy S23 Ultra, Snapdragon 8 Gen 2, 256GB Storage");
  }
}