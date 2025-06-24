import { Parrot } from './Parrot';
import { Ostrich } from './Ostrich';

const parrot = new Parrot();
parrot.fly();          // Valid
parrot.makeSound();    // 

const ostrich = new Ostrich();
ostrich.makeSound();   //  Works without needing fly()
