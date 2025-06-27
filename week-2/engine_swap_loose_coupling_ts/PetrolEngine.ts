import { IEngine } from './IEngine';

export class PetrolEngine implements IEngine {
  start(): void {
    console.log("Petrol engine started");
  }
}
