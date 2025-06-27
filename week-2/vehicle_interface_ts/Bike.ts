import { IVehicle } from './IVehicle';

export class Bike implements IVehicle {
  start(): void {
    console.log("Bike is starting");
  }
}
