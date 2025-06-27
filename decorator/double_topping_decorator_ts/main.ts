import { GreenTea } from './GreenTea';
import { Sugar } from './Sugar';

const tea = new Sugar(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Sugar
console.log(tea.getCost());        // 60
