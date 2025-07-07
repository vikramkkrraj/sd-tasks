import { Car } from './Car';

export class CarBuilder {
  private brand: string = '';
  private engine: string = '';
  private color: string = '';
  private sunroof: boolean = false;
  private automaticTransmission: boolean = false;

  public setBrand(brand: string): CarBuilder {
    this.brand = brand;
    return this;
  }

  public setEngine(engine: string): CarBuilder {
    this.engine = engine;
    return this;
  }

  public setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  public addSunroof(): CarBuilder {
    this.sunroof = true;
    return this;
  }

  public setAutomaticTransmission(): CarBuilder {
    this.automaticTransmission = true;
    return this;
  }

  public build(): Car {
    return new Car(this.brand, this.engine, this.color, this.sunroof, this.automaticTransmission);
  }
}