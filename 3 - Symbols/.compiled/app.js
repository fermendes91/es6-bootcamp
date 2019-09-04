'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Symbol é usado como identificador unico e imutavel, pode ser usado para identificar propriedades de um objeto.
 */

var symbol = Symbol('debug');

console.log(symbol);
console.log(typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol));

var anotherSymbol = Symbol('debug');

// comparando 2 symbols diferentes... apontam para endereços de memoria diferentes.
console.log(symbol == anotherSymbol);

var obj = _defineProperty({
  name: 'Fernando'
}, symbol, 22);

// ao iterarmos sobre o objeto podemos verificar que não existe iteração sobre o symbol
console.log('\nIterando sobre as propriedades de um objeto');
for (var prop in obj) {
  console.log(prop + ': ' + obj[prop]);
}

console.log('\n Durante a iteração o SYMBOL não foi printado... mas ele esta dentro do objeto como podemos ver');
console.log(obj, obj[symbol]);

/**
 * Use the same symbol more than once, different objcets sharing the same id;
 */

console.log('\nObjects sharing the same Symbol');
var symbol1 = Symbol.for('age');
var symbol2 = Symbol.for('age');

console.log(symbol1 === symbol2);

var person = {
  name: 'Mendes'
};

function makeAge(person) {
  var ageSymbol = Symbol.for('age');
  person[ageSymbol] = 26;
}

makeAge(person);

console.log('\nPerson sharing symbol age: ');
console.log(person[symbol1]);
console.log(person[symbol]); // That symbol can have the same identifier as the above, but the reference are differentes
// the references between symbol1, syboml2 and ageSymbol are the same by the mode it was referenced
// Symbol.for('age');


/**
 * Advantages of (unique) IDs / Symbols
 */
var symboll = Symbol.for('age');

var person2 = {
  name: 'Thaysa',
  age: 24
};

function makesAge(person) {
  var ageSymboll = Symbol.for('age');
  person[ageSymboll] = 55;
}

makesAge(person2);

console.log('\nA propriedade age não irá sobescrever a propriedade ');
console.log(person2);

/**
 * Well-Known Symbols (default symbols created by JS)
 */

var Person = function Person() {
  _classCallCheck(this, Person);
};

Person.prototype[Symbol.toStringTag] = 'Person';

// comment the code on line 85 to see the difference and the console.log below
var personObj = new Person();
console.log('' + personObj);

console.log('Change the comportament when plus something at the array');
var numbers = [1, 2, 3];

console.log(numbers + 1);

numbers[Symbol.toPrimitive] = function () {
  return 999;
};

console.log(numbers + 1);
//# sourceMappingURL=app.js.map