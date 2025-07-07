import { CarBuilder } from './CarBuilder';

const myCar = new CarBuilder()
  .setBrand("Tesla Model S")
  .setEngine("Electric")
  .setColor("Black")
  .addSunroof()
  .setAutomaticTransmission()
  .build();

console.log(myCar.describe());