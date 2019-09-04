class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
    }
}

let person = new Person('Fernando');

person.greet();

// verificando o prototipo da função greet
console.log(person.__proto__ == Person.prototype)

/** 
 * inheritance ( herdar )
 **/ 
console.log('\nTrabalhando com classe herdada')
class Fernando extends Person {
    constructor(age) {
        super('Mendes'); // parent constructor
        this.age = age;
    }

    greet() {
        console.log('Hello World!')
    }

    greetTwice() {
        this.greet();
        super.greet();
    }
}

let fernando = new Fernando(23);
fernando.greetTwice();

console.log('\n',fernando.__proto__ === Person.prototype);
console.log(fernando.__proto__ === Fernando.prototype);

/** 
 * static methods 
 **/ 

 console.log('\nTrabalhando com metodos estaticos')
 class Helper {
     static logTwice(message) {
        console.log(message);
        console.log(message);
     }
 }

 Helper.logTwice('Logged!');

 /** 
 * export classes
 **/ 

 console.log('\nTrabalhando com o EXPORT de Classes')
 import {HelperTest} from './helper';
 HelperTest.logTwice('Export da Classe Helper');


 /** 
 * getters and setters
 **/
console.log('\nTrabalhando com getters/setters')
import {PersonTest} from './person';

let person2 = new PersonTest('Fernando');
console.log(person2);

person2.name = 'Ao';
person2.name = 'Mendes';

console.log(person2.name);

/**
 * Extending Built-in Objects
 **/
console.log('\nTrabalhando com Extensão de uma classe já construida')
import ConvertableArray from './convertableArray';

let numberArray = new ConvertableArray();

console.log('\nIsto não vai funcionar no compilador Babel, porque não é possivel fazer extends de uma Built-in class\n'
+ 'tendo em vista que o ES5 não tem esse suporte também.');

// Isto não vai funcionar no compilador Babel, porque não é possivel fazer extends de uma Built-in class
// tendo em vista que o ES5 não tem esse suporte também.

//console.log(numberArray.convert());

