'use strict';

var _external = require('./external');

var imported = _interopRequireWildcard(_external);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// importa tudo o que esta dentro de external, porém é necessario dar um apelido para o import.

console.log(_external.keyValue);
(0, _external.test)();
console.log(_external.keyValue);
console.log(imported.default);

console.log('\nUsando o Import Geral como exemplo');
console.log(imported);

imported.test();
//# sourceMappingURL=app.js.map