let numbers = [1, 2, 3];

// estamos retirando o valor da posicao 0 e 1 do array e jogando para as variaveis a e b (Destructuring)
let [a, b, c, d = 'Default'] = numbers; 

console.log(a);
console.log(b);
console.log(d);

/********************************************** */

let numbers2 = [5, 10, 15, 20, 25];

let [x, y, ...z] = numbers2;

console.log(z);

/********************************************** */
let e = 5;
let f = 10;

[e, f] = [f, e];
console.log('\ne: ',e);
console.log('f: ', f);

/********************************************** */

let [i, , p] = numbers;

console.log('\n',i, p);
