import { Device } from '../Device';

export class SamsungLaptop implements Device {
  specifications(): void {
    console.log("Samsung Laptop: Galaxy Book3, Intel i7, 16GB RAM, 1TB SSD");
  }
}