interface IEngine {
  start(): void;
}

class Engine implements IEngine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine: IEngine;

  constructor(engine: IEngine) {
    this.engine = engine; // Loose coupling (dependency injection)
  }

  drive(): void {
    this.engine.start();
    console.log("Car is driving");
  }
}

// Test
const engine = new Engine();
const car = new Car(engine);
car.drive();
