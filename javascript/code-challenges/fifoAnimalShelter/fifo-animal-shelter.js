'use strict';

class Animal {
    constructor(type) {
        this.type = type;
        this.name = null;
    }
};

class AnimalShelter {
    constructor() {
        this.cat = [];
        this.dog = [];
    }

    enqueue (animal) {
        if (animal.type === 'cat') {
            this.cat.push(animal);
            return undefined;
        }
        this.dog.push(animal);
        return undefined; 
    }

    dequeue(pref) {
        let longTime = 0;
        let adoptAnimal = null;

        if (this.cat.length >= this.dog.length) {
            longTime = this.cat[0]; 
        } else {
            longTime = this.dog[0];
        }

        if (pref !== 'dog' && pref !== 'cat') {
            return longTime;
        }

        if (pref === 'cat') {
            adoptAnimal = this.dog[0];
            return adoptAnimal;
        }
    }
};

// Tests

const shelter = new AnimalShelter();

const dog1 = new Animal();
dog1.type = 'dog';
dog1.name = 'tommy';

const cat1 = new Animal();
cat1.type = 'cat';
cat1.name = 'kitty';


const dog2 = new Animal();
dog2.type = 'dog';
dog2.name = 'hash';

const cat2 = new Animal();
cat2.type = 'cat';
cat2.name = 'flower';


const dog3 = new Animal();
dog3.type = 'dog';
dog3.name = 'milo';

const cat3 = new Animal();
cat3.type = 'cat';
cat3.name = 'fluffy';


const dog4 = new Animal();
dog4.type = 'dog';
dog4.name = 'nyke';

const cat4 = new Animal();
cat4.type = 'cat';
cat4.name = 'sam';

shelter.enqueue(dog1);
shelter.enqueue(dog2);
shelter.enqueue(dog3);
shelter.enqueue(dog4);
shelter.enqueue(cat1);
shelter.enqueue(cat2);
shelter.enqueue(cat3);

describe('#animal-shelter.js', () => {
    test('testing to see if the right cat got picked', () => {
      shelter.enqueue(dog1);
      shelter.enqueue(cat1);
      shelter.enqueue(dog2);
      shelter.enqueue(cat2);
      expect(shelter.dequeue('cat')).toEqual({ type: 'cat', name: 'kitty' });
    });
  
    test('testing to see if the right animal was picked', () => {
      shelter.enqueue(dog1);
      shelter.enqueue(cat1);
      shelter.enqueue(dog2);
      shelter.enqueue(cat2);
      expect(shelter.dequeue('cat')).toEqual({ type: 'cat', name: 'kitty' });
      expect(shelter.dequeue('dog')).toEqual({ type: 'dog', name: 'tommy' });
      expect(shelter.dequeue('dog')).toEqual({ type: 'dog', name: 'tommy' });
    });
  
    test('to see if the longest waiting animal gets chosen first', () => {
      expect(shelter.dequeue('dog')).toEqual({ type: 'dog', name: 'tommy' });
    });
  });
