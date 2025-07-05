// State Interface
interface LightState {
  turnOn(): void;
  turnOff(): void;
  detectMotion(): void;
  adjustBrightness(isDaytime: boolean): void;
}

// Context Class
class SmartLight {
  private currentState: LightState;

  constructor() {
    this.currentState = new OffState(this);
  }

  setState(state: LightState) {
    this.currentState = state;
  }

  turnOn() {
    this.currentState.turnOn();
  }

  turnOff() {
    this.currentState.turnOff();
  }

  detectMotion() {
    this.currentState.detectMotion();
  }

  adjustBrightness(isDaytime: boolean) {
    this.currentState.adjustBrightness(isDaytime);
  }
}

// Off State
class OffState implements LightState {
  constructor(private light: SmartLight) {}

  turnOn(): void {
    console.log("Light turned on manually.");
    this.light.setState(new OnState(this.light));
  }

  turnOff(): void {
    console.log("Light is already off.");
  }

  detectMotion(): void {
    console.log("Motion detected. Light turning on automatically.");
    this.light.setState(new MotionDetectionState(this.light));
  }

  adjustBrightness(isDaytime: boolean): void {
    console.log("Light is off. No brightness adjustment needed.");
  }
}

// On State
class OnState implements LightState {
  constructor(private light: SmartLight) {}

  turnOn(): void {
    console.log("Light is already on.");
  }

  turnOff(): void {
    console.log("Light turned off.");
    this.light.setState(new OffState(this.light));
  }

  detectMotion(): void {
    console.log("Motion ignored. Light already on.");
  }

  adjustBrightness(isDaytime: boolean): void {
    console.log("Adjusting brightness based on environment.");
    this.light.setState(new BrightnessAdjustmentState(this.light, isDaytime));
  }
}

// Motion Detection State
class MotionDetectionState implements LightState {
  constructor(private light: SmartLight) {}

  turnOn(): void {
    console.log("Light is already on due to motion detection.");
  }

  turnOff(): void {
    console.log("Light turned off.");
    this.light.setState(new OffState(this.light));
  }

  detectMotion(): void {
    console.log("Motion already detected.");
  }

  adjustBrightness(isDaytime: boolean): void {
    console.log("Adjusting brightness after motion detection.");
    this.light.setState(new BrightnessAdjustmentState(this.light, isDaytime));
  }
}

// Brightness Adjustment State
class BrightnessAdjustmentState implements LightState {
  constructor(private light: SmartLight, private isDaytime: boolean) {
    this.adjust();
  }

  private adjust(): void {
    if (this.isDaytime) {
      console.log("Daytime detected. Dimming the light.");
    } else {
      console.log("Nighttime detected. Increasing brightness.");
    }
    // Transition back to OnState after adjustment
    this.light.setState(new OnState(this.light));
  }

  turnOn(): void {
    console.log("Brightness adjusted. Light is on.");
  }

  turnOff(): void {
    console.log("Light turned off.");
    this.light.setState(new OffState(this.light));
  }

  detectMotion(): void {
    console.log("Motion detected. Light is already adjusting.");
  }

  adjustBrightness(isDaytime: boolean): void {
    console.log("Already adjusting brightness.");
  }
}

//Usage Example
const smartLight = new SmartLight();

smartLight.turnOn();            // Light turned on manually.
smartLight.adjustBrightness(true); // Daytime detected. Dimming the light.
smartLight.detectMotion();     // Motion ignored. Light already on.
smartLight.turnOff();          // Light turned off.
smartLight.detectMotion();     // Motion detected. Light turning on automatically.
smartLight.adjustBrightness(false); // Nighttime detected. Increasing brightness.