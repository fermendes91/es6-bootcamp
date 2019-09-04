'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = test;
var keyValue = exports.keyValue = 1000;

function test() {
    console.log('tested');
    exports.keyValue = keyValue = 2000;
}

var ab = 'Some text';

// como alternativa ao metodo acima podemos importar da seguinte maneira

// export {keyValue, test}
exports.default = ab; // este é o default generico do arquivo, quando formos fazer o import caso não tenhamos definido  qual import estamos fazendo
// então será este conteudo que será importado.
//# sourceMappingURL=external.js.map