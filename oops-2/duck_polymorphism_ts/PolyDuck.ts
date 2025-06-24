class PolyDuck {
  fly(): void {
    console.log("Generic duck flying");
  }
}

export class DesiDuck extends PolyDuck {
  fly(): void {
    console.log("DesiDuck flies at 10kmph");
  }
}

export class VidesiDuck extends PolyDuck {
  fly(): void {
    console.log("VidesiDuck flies at 20kmph");
  }
}

export class SmartDuck extends PolyDuck {
  fly(): void {
    console.log("SmartDuck flies at 50kmph");
  }
}

export function makeDuckFly(duck: PolyDuck): void {
  duck.fly();
}

// Testing
const ducks: PolyDuck[] = [new DesiDuck(), new VidesiDuck(), new SmartDuck()];
ducks.forEach(makeDuckFly);
