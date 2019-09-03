let name = 'Fernando Mendes';
let age = 25;

let ageField = 'age';

let obj = {
    name,
    [ageField]: age,
    "greet me" () {
        console.log(this.name + ', ' + this.age);
    }
}

console.log(obj);
obj['greet me']();