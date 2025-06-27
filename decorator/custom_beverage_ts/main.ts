import { Coffee } from './Coffee';
import { Sugar } from './Sugar';
import { Honey } from './Honey';
import { WhippedCream } from './WhippedCream';

const myDrink = new WhippedCream(new Honey(new Sugar(new Coffee())));
console.log(myDrink.getDescription()); // Coffee + Sugar + Honey + WhippedCream
console.log(myDrink.getCost());        // 95
