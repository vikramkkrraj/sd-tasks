import { Observer } from './Observer';

export class Smartphone implements Observer {
  update(): void {
    console.log("Smartphone received notification");
  }
}
