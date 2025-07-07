export class Car {
  constructor(
    public brand: string,
    public engine: string,
    public color: string,
    public sunroof: boolean,
    public automaticTransmission: boolean
  ) { }

  public describe(): string {
    return `Car Details:
            Brand: ${this.brand}
            Engine: ${this.engine}
            Color: ${this.color}
            Sunroof: ${this.sunroof}
            Automatic Transmission: ${this.automaticTransmission}`;
  }
}