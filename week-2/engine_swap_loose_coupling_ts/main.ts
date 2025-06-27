import { Car } from './Car';
import { PetrolEngine } from './PetrolEngine';
import { DieselEngine } from './DieselEngine';

const petrolCar = new Car(new PetrolEngine());
petrolCar.drive(); // Petrol engine started 
//  Driving car

const dieselCar = new Car(new DieselEngine());
dieselCar.drive(); // Diesel engine started 
//  Driving car
