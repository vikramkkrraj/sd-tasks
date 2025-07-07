import { Device } from '../Device';

export class ApplePhone implements Device {
  specifications(): void {
    console.log("Apple Phone: iPhone 14 Pro, A16 chip, 128GB Storage");
  }
}