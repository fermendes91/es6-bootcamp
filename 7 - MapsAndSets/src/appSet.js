/**
 * Sets
 * 
 * We cannot have duplicated elements inside the Set collection
 */

let set = new Set([1, 1, 1]);

set.add(2);
set.add(2);

for (let element of set) {
    console.log(element);
}

set.delete(1);

console.log(set.has(2)); // verify if has contain a certain value

/**
 * WeekSet
 * 
 * a mesma diferença de Map e WeekMap, somente armazena objetos
 */

let obj1 = {a: 1};
let obj2 = {b: 2};

 let weakSet = new WeakSet([obj1, obj2, obj2])

 console.log(weakSet.has(obj2));