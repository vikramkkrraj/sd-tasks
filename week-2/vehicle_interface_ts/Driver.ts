import { IVehicle } from './IVehicle';

export class Driver {
  constructor(private vehicle: IVehicle) {}

  drive(): void {
    this.vehicle.start();
    console.log("Driving...");
  }
}
