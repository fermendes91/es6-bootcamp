require("babel-core/register");
require("babel-polyfill");

function *select() { // Um asterisco em frente ao nome do metodo define ele como um generator.
    yield 'House';
    yield 'Garage';
}

let it = select();

console.log(it.next());
console.log(it.next());
console.log(it.next());