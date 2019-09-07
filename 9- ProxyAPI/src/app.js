/**
 * Proxy API
 * 
 * proxy é uma cada intermediaria entre a atribuição de um valor e o proprio uso dela
 * quando fazemos o get e o set de um arquivo é sempre chamado os metodos definidos no handler get and set 
 * para fazer algum tipo de validação.
 */
let person = {
    name: 'Fernando',
    age: 21
};

let handler = {
    get: function (target, name) {
        return name in target ? target[name] : 'Non existant'
    },
    set: function (target, property, value) {
        if (value.length >= 2) {
            return Reflect.set(target, property, value);
        }
        return true;
    }
};

let proxy1 = new Proxy(person, handler);

console.log('\nTestando o GET metodo')
console.log(proxy1.age);
console.log(proxy1.hobbies);

console.log('\nTestando o SET metodo')
proxy1.name = 'Fer';
console.log(proxy1.name)


/**
 * Proxy as prototype
 */
console.log('\nUtilizando o Proxy como Prototype')

let proxy2 = new Proxy({}, handler);

Reflect.setPrototypeOf(person, proxy2);
console.log(person.hobbies);

/**
 * Proxies as proxies
 */

let protoHandler = {
    get: function (target, name) {
        return name in target ? target[name] : 'Non existant'
    },
};

let protoProxy = new Proxy(proxy2, protoHandler);

Reflect.setPrototypeOf(person, protoProxy);
console.log(person.hobbies);

/**
 * Wrapping Functions
 */
console.log('\nWrapping Functions')

 function log(message) {
     console.log('Log entry created, message: ' + message);
 }

 let handlerFunction = {
     apply: function(target, thisArg, argumentsList) {
         if(argumentsList.length === 1) {
            return Reflect.apply(target, thisArg, argumentsList);
         }
     }
 }

 let proxyFunction = new Proxy(log, handlerFunction);
 proxyFunction('Hello');
 proxyFunction('Hello', 2); // este console.log não será acionado pois estamos passando 2 parametros, e o proxy esta configurado somente para aceitar 1 param

/**
 * Revocable Proxies
 * 
 * a way to remove a proxy when necessary
 */

 let pessoa = {
     name: 'Vanessa'
 };

 let handlerRevocable = {
     get: function(target, property) {
         return Reflect.get(target, property)
     }
 }

 let {proxy, revoke} = Proxy.revocable(pessoa, handlerRevocable);

 console.log(proxy.name);

 revoke();
 console.log(proxy.name); // Como o proxy foi destruido, este metodo não será chamado (error);