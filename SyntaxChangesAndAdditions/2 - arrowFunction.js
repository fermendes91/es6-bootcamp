var fn = () => 'Hello World';

console.log(fn());

var fn2 = (a, b) => {
    return a + b;
}

console.log(fn2(5, 8));

/* O unico caso que podemos passar o parametro sem parenteses, é quando só temos 1 parametro para função */
var fn3 = name => {
    return 'Hello ' + name;
}

console.log(fn3('Fernando'))

setTimeout(() => console.log('Tchanabrauzer'), 500);

/* escopo THIS dentro de uma função e de uma arrow function */


/* Utilizando function normalmente o escopo this vai para o window (o escopo global) assim como var. */
function func() {
    console.log(this);
}

func();

/* Utilizando arrow function temos um escopo fechado para o this. ao printarmos o this ele somente será um objeto vazio. */
var func2 = () => {
    console.log(this);
}

console.log('\n\n')
func2();