'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('./helper');

var _person = require('./person');

var _convertableArray = require('./convertableArray');

var _convertableArray2 = _interopRequireDefault(_convertableArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'greet',
        value: function greet() {
            console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
        }
    }]);

    return Person;
}();

var person = new Person('Fernando');

person.greet();

// verificando o prototipo da função greet
console.log(person.__proto__ == Person.prototype);

/** 
 * inheritance ( herdar )
 **/
console.log('\nTrabalhando com classe herdada');

var Fernando = function (_Person) {
    _inherits(Fernando, _Person);

    function Fernando(age) {
        _classCallCheck(this, Fernando);

        // parent constructor
        var _this = _possibleConstructorReturn(this, (Fernando.__proto__ || Object.getPrototypeOf(Fernando)).call(this, 'Mendes'));

        _this.age = age;
        return _this;
    }

    _createClass(Fernando, [{
        key: 'greet',
        value: function greet() {
            console.log('Hello World!');
        }
    }, {
        key: 'greetTwice',
        value: function greetTwice() {
            this.greet();
            _get(Fernando.prototype.__proto__ || Object.getPrototypeOf(Fernando.prototype), 'greet', this).call(this);
        }
    }]);

    return Fernando;
}(Person);

var fernando = new Fernando(23);
fernando.greetTwice();

console.log('\n', fernando.__proto__ === Person.prototype);
console.log(fernando.__proto__ === Fernando.prototype);

/** 
 * static methods 
 **/

console.log('\nTrabalhando com metodos estaticos');

var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: 'logTwice',
        value: function logTwice(message) {
            console.log(message);
            console.log(message);
        }
    }]);

    return Helper;
}();

Helper.logTwice('Logged!');

/** 
* export classes
**/

console.log('\nTrabalhando com o EXPORT de Classes');

_helper.HelperTest.logTwice('Export da Classe Helper');

/** 
* getters and setters
**/
console.log('\nTrabalhando com getters/setters');


var person2 = new _person.PersonTest('Fernando');
console.log(person2);

person2.name = 'Ao';
person2.name = 'Mendes';

console.log(person2.name);

/**
 * Extending Built-in Objects
 **/
console.log('\nTrabalhando com Extensão de uma classe já construida');


var numberArray = new _convertableArray2.default();

console.log(numberArray.convert());
//# sourceMappingURL=app.js.map