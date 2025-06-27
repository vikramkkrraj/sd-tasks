import { IEngine } from './IEngine';

export class DieselEngine implements IEngine {
  start(): void {
    console.log("Diesel engine started");
  }
}
