import { GreenTea } from './GreenTea';
import { Sugar } from './Sugar';

const tea = new Sugar(new GreenTea());
console.log(tea.getDescription()); // Green Tea + Sugar
console.log(tea.getCost());        // 50
