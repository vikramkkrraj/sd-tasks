import { Printable } from './Printable';
import { Scannable } from './Scannable';
import { Faxable } from './Faxable';

export class SmartPrinter implements Printable, Scannable, Faxable {
  print(): void {
    console.log("Printing from SmartPrinter");
  }

  scan(): void {
    console.log("Scanning with SmartPrinter");
  }

  fax(): void {
    console.log("Faxing from SmartPrinter");
  }
}
