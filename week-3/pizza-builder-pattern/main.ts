import { PizzaBuilder } from './PizzaBuilder';

const myPizza = new PizzaBuilder()
  .setSize('large')
  .addCheese()
  .addMushrooms()
  .build();

console.log(myPizza.describe());