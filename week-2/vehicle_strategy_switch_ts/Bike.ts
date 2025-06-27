import { Vehicle } from './Vehicle';

export class Bike implements Vehicle {
  start(): void {
    console.log("Bike is starting");
  }
}
