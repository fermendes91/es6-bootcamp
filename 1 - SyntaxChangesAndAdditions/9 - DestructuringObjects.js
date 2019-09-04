let obj = {
    name: 'Fernando',
    age: 18,
    greet: function () {
        console.log('Hello there!');
    }
}

let {name, age} = obj;
// let {name, , greet} = obj; Usando objetos não conseguimos quebrar um objeto, se não quisermos uma propriedade basta ignora-la do destructuring
// diferente do array, aqui a destrução é feita pelo nome, no array é feita pela posição, por isso podemos quebrar.


let {greet: hello} = obj; // podemos mudar o nome do metodo que estamos fazendo a destrução. Agora o metodo greet se chamara hello.

console.log(name, age);

hello();