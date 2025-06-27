import { Bike } from './Bike';
import { Car } from './Car';
import { Driver } from './Driver';

const driver = new Driver(new Bike());
driver.drive(); // Bike is starting 
//  Driving...

driver.setVehicle(new Car());
driver.drive(); // Car is starting 
//  Driving...
