import { GreenTea } from './GreenTea';
import { Sugar } from './Sugar';
import { Honey } from './Honey';

const tea = new Honey(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Honey
console.log(tea.getCost());        // 70
