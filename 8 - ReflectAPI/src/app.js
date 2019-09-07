/**
 * Reflect API
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, I am ', this.name);
    }
}

Person.prototype.age = 20;

let person = Reflect.construct(Person, ['Fernando', '26']); // the third argument would change the prototype of obj
console.log(person)

/**
 * Calling functions with Reflect.apply
 */
console.log('\nUsing Reflect apply')
Reflect.apply(person.greet, person, []) // the second parameter is the reference (this) and third one is the parameters
Reflect.apply(person.greet, { name: 'Maria' }, [])

/**
 * Reflect and prototypes
 */
console.log('\nGetting prototype using Reflect')
console.log(Reflect.getPrototypeOf(person) === Person.prototype);

/**
 * Change the prototype of an object
 */
console.log('\nChange the prototype of and object')
let proto = {
    age: 29,
    greet() {
        console.log('Hello')
    }
}

Reflect.setPrototypeOf(person, proto);
console.log(Reflect.getPrototypeOf(person), Reflect.getPrototypeOf(person) === Person.prototype);

/**
 * Calling  method via reflect
 */
console.log('\nCalling method using Reflect')
Reflect.apply(person.greet, null, []) // null, because we don't need the reference (this)

/**
 * Accessing properties with Reflect and given value
 */
console.log('\nAccessing properties using Reflect')
console.log(Reflect.get(person, 'name'));

console.log('\nChange the propertie name using Reflect')
Reflect.set(person, 'name', 'Piazza');
console.log(Reflect.get(person, 'name'));

/**
 * Annalyzing Object with Own Keys
 */
console.log('\nAnalyzing Object with One Keys')
console.log(Reflect.ownKeys(person)); // will show the properties defined on the constructor

/**
 * Creating and deleting properties with Reflect
 */
console.log('\nCreating and deleting properties with Reflect');
Reflect.defineProperty(person, 'hobbies', {
    writable: true, // be default it's false
    value: ['Sports', 'Cooking'],
    configurable: true // possible to change properties like (writable) after the object is created (default is false)
})

console.log(person.hobbies);

console.log('\nDelete the propertie hobbies');
Reflect.deleteProperty(person, 'hobbies');
console.log('person.hobbies: ' + person.hobbies);


/**
 * Prevent Object Extensions
 */

 console.log('\nLocking an object')
 Reflect.preventExtensions(person); // now if we try to create a new property it will be locked
 console.log(Reflect.isExtensible(person));

