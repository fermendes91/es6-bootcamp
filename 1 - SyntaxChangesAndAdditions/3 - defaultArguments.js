

// caso não seja passado parametro será considerado o valor default 10. e o compare receberá o mesmo valor default de number
function isEqualTo(number = 10, compare = number) {
    return number == compare;
}

console.log(isEqualTo());
console.log(isEqualTo(5, 20)); 
console.log(isEqualTo(10));
console.log(isEqualTo(15, 13));
console.log(isEqualTo(79, 79));
