/**
 * Maps
 */

let cardAce = {
    name: 'Ace of Spades'
}

let cardKing = {
    name: 'King of Clubs'
}

let deck = new Map();
deck.set('as', cardAce); // inerindo itens dentro do MAP
deck.set('kc', cardKing);

console.log(deck, deck.size);

// get item from the Map
console.log('\nGet the key \'as\'', deck.get('as'));

// deleting an item from the Map
deck.delete('as');

console.log('\nIterando sobre as chaves de um MAP e printando o valor, é possivel iterar sobre os values() também')
for (let key of deck.keys()) {
    console.log(deck.get(key));
}

/**
 * Weak Map
 * 
 * A diferença entre Map e WeakMap é que o WeakMap precisa ter a chave como um objeto
 * o javascript ficará responsavel pora fazer o garbage colector dos objetos criados.
 */

let key1 = {id: 1};
let key2 = {id: 2};

let weakDeck = new WeakMap();

weakDeck.set(key1, cardAce);
weakDeck.set(key2, cardKing);

console.log(weakDeck.get(key1));
