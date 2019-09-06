'use strict';

/**
 * Object Extensions
 */

console.log('\nOBJECT EXTENSIONS');
var obj1 = { a: 1 };
var obj2 = { b: 2 };

var obj = Object.assign(obj1, obj2);
console.log('Merging objects: ', obj1);
console.log(obj === obj1);
obj = Object.assign({}, obj1, obj2);
console.log(obj === obj1);

/**
 * The Math Object
 */

console.log('\nTHE MATH OBJECT');
var numberSign = -10;
console.log('Number sign\n', Math.sign(numberSign)); // return -1 if the number is negative and 1 if the number is positive and 0 if the number is 0 

var numberTrunc = 3.78;
console.log('Number trunc \n', Math.trunc(numberTrunc)); // cut all the decimal place, and just return the integer number

/**
 * String
 */
console.log('\nSTRING');
var name = 'Fernando';

console.log(name, 'starts with Fer ?', name.startsWith('Fer'));
console.log(name, 'ends with nando ?', name.endsWith('nando'));
console.log(name, 'contains the word \'erna\' ?', name.endsWith('erna'));

/**
 * Number Object
 */

console.log('\nNUMBER OBJECT');
var numberNaN = NaN;
var validNumber = 999999999999999;
console.log('Object numberNaN is a number ?', !Number.isNaN(numberNaN));
console.log('Object validNumber is finite ?', Number.isFinite(validNumber));

/**
 * Arrays
 */

console.log('\nARRAYS');

var array = Array(5); // lock array in 5 positions
console.log(array);

var array2 = Array.of(5, 10, 15, 20);
console.log(array2);

// let newArray = array2.from(array2, value => value*2 ); it's not working

array.fill(100, 0, 2);
console.log(array);

console.log('\nUsing the find method for array\n', array2.find(function (value) {
  // stop after the first match
  return value >= 12;
}));

var inventory = [{ name: 'apples', quantity: 2 }, { name: 'bananas', quantity: 0 }, { name: 'cherries', quantity: 5 }];

function findCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));

var arr = ['a', 'b', 'c'];

console.log(['a', 'b', 'c'].copyWithin(1, 2)); // copia o item da terceira posicao para a segunda (metodo destrutivo)

console.log('\nEntries: ');
var it = arr.entries();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var element = _step.value;

    console.log(element);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
//# sourceMappingURL=app.js.map