import { Device } from '../Device';

export class AppleLaptop implements Device {
  specifications(): void {
    console.log("Apple Laptop: MacBook Pro with M2 chip, 16GB RAM, 512GB SSD");
  }
}