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