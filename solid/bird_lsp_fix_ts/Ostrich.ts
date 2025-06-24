import { Bird } from './Bird';

export class Ostrich extends Bird {
  makeSound(): void {
    console.log("Boom boom!");
  }
}
