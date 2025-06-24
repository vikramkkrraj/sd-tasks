import { FlyingBird } from './FlyingBird';

export class Parrot extends FlyingBird {
  fly(): void {
    console.log("Parrot is flying...");
  }

  makeSound(): void {
    console.log("Squawk!");
  }
}
