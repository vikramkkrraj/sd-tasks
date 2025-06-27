import { Vehicle } from './Vehicle';

export class Car implements Vehicle {
  start(): void {
    console.log("Car is starting");
  }
}
