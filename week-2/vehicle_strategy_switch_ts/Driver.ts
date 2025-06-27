import { Vehicle } from './Vehicle';

export class Driver {
  private vehicle: Vehicle;

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  drive(): void {
    this.vehicle.start();
    console.log("Driving...");
  }

  setVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
  }
}
