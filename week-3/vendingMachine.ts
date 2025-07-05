// State interface
interface State {
  insertCoin(): void;
  makeSelection(): void;
  dispenseItem(): void;
}

// Context class
class VendingMachine {
  private currentState: State;

  constructor() {
    this.currentState = new IdleState(this);
  }

  setState(state: State) {
    this.currentState = state;
  }

  insertCoin() {
    this.currentState.insertCoin();
  }

  makeSelection() {
    this.currentState.makeSelection();
  }

  dispenseItem() {
    this.currentState.dispenseItem();
  }
}

// Idle State
class IdleState implements State {
  constructor(private machine: VendingMachine) {}

  insertCoin(): void {
    console.log("Coin inserted. Moving to Processing state.");
    this.machine.setState(new ProcessingState(this.machine));
  }

  makeSelection(): void {
    console.log("Please insert coin first.");
  }

  dispenseItem(): void {
    console.log("Please insert coin and make a selection first.");
  }
}

// Processing State
class ProcessingState implements State {
  constructor(private machine: VendingMachine) {}

  insertCoin(): void {
    console.log("Coin already inserted.");
  }

  makeSelection(): void {
    console.log("Selection made. Moving to Dispensing state.");
    this.machine.setState(new DispensingState(this.machine));
  }

  dispenseItem(): void {
    console.log("Please make a selection first.");
  }
}

// Dispensing State
class DispensingState implements State {
  constructor(private machine: VendingMachine) {}

  insertCoin(): void {
    console.log("Currently dispensing. Please wait.");
  }

  makeSelection(): void {
    console.log("Already dispensing. Please wait.");
  }

  dispenseItem(): void {
    console.log("Item dispensed. Returning to Idle state.");
    this.machine.setState(new IdleState(this.machine));
  }
}

//  Usage Example
const machine = new VendingMachine();

machine.makeSelection(); // Please insert coin first.
machine.dispenseItem();  // Please insert coin and make a selection first.

machine.insertCoin();    // Coin inserted. Moving to Processing state.
machine.insertCoin();    // Coin already inserted.
machine.makeSelection(); // Selection made. Moving to Dispensing state.
machine.dispenseItem();  // Item dispensed. Returning to Idle state.