import { IEngine } from './IEngine';

export class Car {
  constructor(private engine: IEngine) {}

  drive(): void {
    this.engine.start();
    console.log("Driving car");
  }
}
