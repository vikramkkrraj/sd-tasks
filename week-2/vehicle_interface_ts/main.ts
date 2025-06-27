import { Car } from './Car';
import { Bike } from './Bike';
import { Driver } from './Driver';

const carDriver = new Driver(new Car());
carDriver.drive();

const bikeDriver = new Driver(new Bike());
bikeDriver.drive();
