import { Espresso } from './Espresso';
import { LemonTea } from './LemonTea';
import { Sugar } from './Sugar';
import { Honey } from './Honey';
import { WhippedCream } from './WhippedCream';

const order1 = new Honey(new WhippedCream(new Espresso()));
const order2 = new Sugar(new Sugar(new LemonTea()));

console.log("Order 1:", order1.getDescription()); // Espresso + WhippedCream + Honey
console.log("Cost 1: ₹", order1.getCost());       // ₹115

console.log("Order 2:", order2.getDescription()); // LemonTea + Sugar + Sugar
console.log("Cost 2: ₹", order2.getCost());       // ₹60
