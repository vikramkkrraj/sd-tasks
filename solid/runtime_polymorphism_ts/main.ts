import { Animal } from './Animal';
import { Dog } from './Dog';

function makeAnimalSound(animal: Animal): void {
  animal.makeSound(); // Polymorphic behavior
}

const genericAnimal = new Animal();
const dog = new Dog();

makeAnimalSound(genericAnimal); // Output: Some sound
makeAnimalSound(dog);           // Output: Bark!
