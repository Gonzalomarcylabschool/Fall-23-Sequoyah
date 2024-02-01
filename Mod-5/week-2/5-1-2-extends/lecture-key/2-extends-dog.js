class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }

  static generateRandomSound() {
    const possibleSounds = ['Meow', 'Woof', 'Moo', 'Roar', 'Chirp', 'Oink'];
    const randomIndex = Math.floor(Math.random() * possibleSounds.length);
    return possibleSounds[randomIndex];
  }
}

const dog = new Animal('dog', 'woof');
console.log(dog);
dog.makeSound();

const cat = new Animal('cat', Animal.generateRandomSound());
console.log(cat);
cat.makeSound();
/* 
  * German Shepherd
  * Bulldog
  * Poodle
  * Pitbull
 */
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Woof'); // Call the constructor of the parent class
    this.breed = breed;
  }

  wagTail() {
    console.log(`${this.name} is wagging its tail.`);
  }
}

const viva = new Dog('Viva', 'pitbull')
console.log(viva)
