import { Printable } from './Printable';

export class OldPrinter implements Printable {
  print(): void {
    console.log("Printing from OldPrinter");
  }
}
