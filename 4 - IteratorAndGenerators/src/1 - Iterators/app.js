let array = [1, 2, 3];

array[Symbol.iterator] = function() {
    let nextValue = 10;
    return {
        next: function() {
            nextValue++;
            return {
                done: nextValue > 13 ? true : false,
                value: nextValue
            }
        }
    }
}

console.log('Alterando o corpamento de um iterador totalmente')
for (let element of array) {
    console.log(element);
}

let person = {
    name: 'Fernando',
    hobbies: ['Sports', 'Cooking', 'Play Piano'],
    [Symbol.iterator]: function() {
        let i = 0;
        let hobbies = this.hobbies;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                    done: i > hobbies.length ? true : false,
                    value: value
                }
            }
        }
    }
}

console.log('\nFazendo uma iteração customizada dentro de uma lista de um objeto')
for (let hobby of person) {
    console.log(hobby);
}



