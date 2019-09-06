"use strict";

/**
 * Sets
 * 
 * We cannot have duplicated elements inside the Set collection
 */

var set = new Set([1, 1, 1]);

set.add(2);
set.add(2);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

set.delete(1);

console.log(set.has(2)); // verify if has contain a certain value

/**
 * WeekSet
 */

var obj1 = { a: 1 };
var obj2 = { b: 2 };

var weakSet = new WeakSet([obj1, obj2, obj2]);

console.log(weakSet.has(obj2));
//# sourceMappingURL=appSet.js.map