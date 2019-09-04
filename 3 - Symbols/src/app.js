/**
 * Symbol é usado como identificador unico e imutavel, pode ser usado para identificar propriedades de um objeto.
 */

let symbol = Symbol('debug');

console.log(symbol);
console.log(typeof symbol);

let anotherSymbol = Symbol('debug');

// comparando 2 symbols diferentes... apontam para endereços de memoria diferentes.
console.log(symbol == anotherSymbol);

let obj = {
    name: 'Fernando',
    [symbol]: 22
}

// ao iterarmos sobre o objeto podemos verificar que não existe iteração sobre o symbol
console.log('\nIterando sobre as propriedades de um objeto');
for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
}

console.log('\n Durante a iteração o SYMBOL não foi printado... mas ele esta dentro do objeto como podemos ver');
console.log(obj, obj[symbol])

/**
 * Use the same symbol more than once, different objcets sharing the same id;
 */

 console.log('\nObjects sharing the same Symbol')
 let symbol1 = Symbol.for('age');
 let symbol2 = Symbol.for('age');

 console.log(symbol1 === symbol2);

 let person = {
     name: 'Mendes'
 }

 function makeAge(person) {
     let ageSymbol = Symbol.for('age');
     person[ageSymbol] = 26;
 }

 makeAge(person);

 console.log('\nPerson sharing symbol age: ')
 console.log(person[symbol1]);
 console.log(person[symbol]); // That symbol can have the same identifier as the above, but the reference are differentes
 // the references between symbol1, syboml2 and ageSymbol are the same by the mode it was referenced
 // Symbol.for('age');


/**
 * Advantages of (unique) IDs / Symbols
 */
let symboll = Symbol.for('age');

let person2 = {
    name: 'Thaysa',
    age: 24
}

function makesAge(person) {
    let ageSymboll = Symbol.for('age');
    person[ageSymboll] = 55
}

makesAge(person2);

console.log('\nA propriedade age não irá sobescrever a propriedade ')
console.log(person2);

/**
 * Well-Known Symbols (default symbols created by JS)
 */

 class Person {

 }

Person.prototype[Symbol.toStringTag] = 'Person';

// comment the code on line 85 to see the difference and the console.log below
let personObj = new Person();
console.log(`${personObj}`);

console.log('Change the comportament when plus something at the array')
let numbers = [1 , 2, 3];

console.log(numbers + 1);

numbers[Symbol.toPrimitive] = () => {
    return 999;
}

console.log(numbers + 1);



