// State Interface
interface TrafficLightState {
  next(): void;
  getAction(): string;
}

// Context Class
class TrafficLight {
  private currentState: TrafficLightState;

  constructor() {
    this.currentState = new RedLight(this);
  }

  setState(state: TrafficLightState) {
    this.currentState = state;
  }

  change() {
    this.currentState.next();
  }

  showAction() {
    console.log(this.currentState.getAction());
  }
}

// Red Light State
class RedLight implements TrafficLightState {
  constructor(private light: TrafficLight) {}

  next(): void {
    console.log("Switching from Red to Green...");
    this.light.setState(new GreenLight(this.light));
  }

  getAction(): string {
    return "Red Light - Vehicles must stop.";
  }
}

// Green Light State
class GreenLight implements TrafficLightState {
  constructor(private light: TrafficLight) {}

  next(): void {
    console.log("Switching from Green to Yellow...");
    this.light.setState(new YellowLight(this.light));
  }

  getAction(): string {
    return "Green Light - Vehicles can move.";
  }
}

// Yellow Light State
class YellowLight implements TrafficLightState {
  constructor(private light: TrafficLight) {}

  next(): void {
    console.log("Switching from Yellow to Red...");
    this.light.setState(new RedLight(this.light));
  }

  getAction(): string {
    return "Yellow Light - Vehicles should slow down.";
  }
}

// Usage Example
const trafficLight = new TrafficLight();

trafficLight.showAction(); // Red
trafficLight.change();

trafficLight.showAction(); // Green
trafficLight.change();

trafficLight.showAction(); // Yellow
trafficLight.change();

trafficLight.showAction(); // Red