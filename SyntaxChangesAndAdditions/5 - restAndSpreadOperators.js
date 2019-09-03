
/* O rest operator irá fazer a conversão de variaveis soltas em um array. esta conversão irá acontecer quando operador
    for usado no parametro de uma função. Exemplo da linha 17.
*/
function sumUp(...toAdd) {

    console.log(toAdd);

    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}


console.log(sumUp(10, 100, 20));

/* O spread operator irá quebrar o array em pedaços, este cenario irá ocorrer quando o operador for usado simplesmente
 para quebrar um array.  */

let numbers = [1, 2, 3, 4, 5];
console.log('\n',...numbers)

console.log(Math.max(...numbers));
