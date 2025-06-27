import { Observer } from './Observer';

export class Tablet implements Observer {
  update(): void {
    console.log("Tablet received notification");
  }
}
