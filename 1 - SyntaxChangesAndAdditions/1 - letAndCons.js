/*  
    Usando var a varivel mantem o escopo global
*/

console.log('Utilizando VAR')
var age1 = 10;
if(true) {
    var age1 = 20;
    console.log(age1);
}
console.log(age1);

/*  
    Usando let a variavel mantem o escopo.

    Hoisting -> quando declaramos um var sem a palavra var, ao compilar o javascript cria essa variavel no começo da pagina para manter o escopo global
    (Hoisting), para o LET isso NÃO FUNCIONA. sempre declarar a variavel que for usar.
*/

console.log('\nUtilizando LET')
let age2 = 15;
if(true) {
    let age2 = 25;
    console.log(age2);
}
console.log(age2);

/*
    Cons é uma variavel de escopo fechado como o LET, porem este não pode ter o valor alterado

    Uma constante  não deixa uma referencia de memoria ser alterada, por isso ao adicionarmos item num array,
    ou simplesmente alterarmos um objeto que seja uma constante, a referencia de memoria não estará sendo alterda,
    e somente o valor daquela referencia.

    por isso não dá erro ao tentar "modificar" o conteudo de um objeto conforme exemplo abaixo.

    se tentarmos alterar diretamente a constante array ou person, ae teremos problema de execução do script.
    pois estaremos alterando diretamente o endereço de memoria daquela constante.
*/
console.log('\nEntendendo o funcionamento de CONS')

const array = [10, 20, 30];
array.push(40);
console.log(array);

const person = { name: 'Fernando Mendes', age: 22};

person.name = 'Fernando Maciel';
person.age = 25;
console.log(person);