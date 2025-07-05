// ATM State Interface
interface ATMState {
  insertCard(): void;
  enterPIN(pin: number): void;
  requestCash(amount: number): void;
}

// Context Class
class ATM {
  private currentState: ATMState;

  constructor() {
    this.currentState = new IdleState(this);
  }

  setState(state: ATMState) {
    this.currentState = state;
  }

  insertCard() {
    this.currentState.insertCard();
  }

  enterPIN(pin: number) {
    this.currentState.enterPIN(pin);
  }

  requestCash(amount: number) {
    this.currentState.requestCash(amount);
  }
}

// Idle State
class IdleState implements ATMState {
  constructor(private atm: ATM) {}

  insertCard(): void {
    console.log("Card inserted. Please enter your PIN.");
    this.atm.setState(new CardInsertedState(this.atm));
  }

  enterPIN(pin: number): void {
    console.log("Please insert your card first.");
  }

  requestCash(amount: number): void {
    console.log("Please insert your card and enter your PIN first.");
  }
}

// Card Inserted State
class CardInsertedState implements ATMState {
  constructor(private atm: ATM) {}

  insertCard(): void {
    console.log("Card already inserted.");
  }

  enterPIN(pin: number): void {
    if (pin === 1234) {
      console.log("PIN correct. You can now withdraw cash.");
      this.atm.setState(new AuthenticatedState(this.atm));
    } else {
      console.log("Incorrect PIN. Please try again.");
    }
  }

  requestCash(amount: number): void {
    console.log("Please enter your PIN first.");
  }
}

// Authenticated State
class AuthenticatedState implements ATMState {
  constructor(private atm: ATM) {}

  insertCard(): void {
    console.log("Card already inserted and authenticated.");
  }

  enterPIN(pin: number): void {
    console.log("Already authenticated.");
  }

  requestCash(amount: number): void {
    console.log(`Dispensing ₹${amount}...`);
    this.atm.setState(new DispensingState(this.atm, amount));
  }
}

// Dispensing State
class DispensingState implements ATMState {
  constructor(private atm: ATM, private amount: number) {
    this.dispense();
  }

  private dispense() {
    console.log(`₹${this.amount} dispensed. Transaction complete.`);
    console.log("Returning to Idle state.");
    this.atm.setState(new IdleState(this.atm));
  }

  insertCard(): void {
    console.log("Please wait, dispensing in progress.");
  }

  enterPIN(pin: number): void {
    console.log("Please wait, dispensing in progress.");
  }

  requestCash(amount: number): void {
    console.log("Please wait, dispensing in progress.");
  }
}

//Usage Example
const atm = new ATM();

atm.enterPIN(1234);           // Please insert your card first.
atm.requestCash(1000);        // Please insert your card and enter your PIN first.

atm.insertCard();             // Card inserted. Please enter your PIN.
atm.requestCash(1000);        // Please enter your PIN first.
atm.enterPIN(1111);           // Incorrect PIN
atm.enterPIN(1234);           // PIN correct
atm.requestCash(500);         // Dispensing...