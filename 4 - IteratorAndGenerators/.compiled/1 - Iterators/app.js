'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var array = [1, 2, 3];

array[Symbol.iterator] = function () {
    var nextValue = 10;
    return {
        next: function next() {
            nextValue++;
            return {
                done: nextValue > 13 ? true : false,
                value: nextValue
            };
        }
    };
};

console.log('Alterando o corpamento de um iterador totalmente');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

var person = _defineProperty({
    name: 'Fernando',
    hobbies: ['Sports', 'Cooking', 'Play Piano']
}, Symbol.iterator, function () {
    var i = 0;
    var hobbies = this.hobbies;
    return {
        next: function next() {
            var value = hobbies[i];
            i++;
            return {
                done: i > hobbies.length ? true : false,
                value: value
            };
        }
    };
});

console.log('\nFazendo uma iteração customizada dentro de uma lista de um objeto');
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = person[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var hobby = _step2.value;

        console.log(hobby);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}
//# sourceMappingURL=app.js.map