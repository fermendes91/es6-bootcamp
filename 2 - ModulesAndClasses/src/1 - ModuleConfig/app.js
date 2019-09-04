import defaultExport, {keyValue as key, test} from './external'

import * as imported from './external'; // importa tudo o que esta dentro de external, porém é necessario dar um apelido para o import.

console.log(key);
test();
console.log(key);
console.log(defaultExport)

console.log('\nUsando o Import Geral como exemplo')
console.log(imported);

imported.test();
