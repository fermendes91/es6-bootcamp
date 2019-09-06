'use strict';

/**
 * Maps
 */

var cardAce = {
    name: 'Ace of Spades'
};

var cardKing = {
    name: 'King of Clubs'
};

var deck = new Map();
deck.set('as', cardAce); // inerindo itens dentro do MAP
deck.set('kc', cardKing);

console.log(deck, deck.size);

// get item from the Map
console.log('\nGet the key \'as\'', deck.get('as'));

// deleting an item from the Map
deck.delete('as');

console.log('\nIterando sobre as chaves de um MAP e printando o valor, é possivel iterar sobre os values() também');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = deck.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        console.log(deck.get(key));
    }

    /**
     * Weak Map
     * 
     * A diferença entre Map e WeakMap é que o WeakMap precisa ter a chave como um objeto
     * o javascript ficará responsavel pora fazer o garbage colector dos objetos criados.
     */
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

var key1 = { id: 1 };
var key2 = { id: 2 };

var weakDeck = new WeakMap();

weakDeck.set(key1, cardAce);
weakDeck.set(key2, cardKing);

console.log(weakDeck.get(key1));
//# sourceMappingURL=app.js.map