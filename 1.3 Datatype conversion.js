let score = "33" // striing

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //changed into number
console.log(typeof valueInNumber);

console.log("-------------------");

let score2 = "33abc"
console.log(score2);

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); // will show as a number
console.log(valueInNumber2); // here NaN (not a number) will show

console.log("-------------------");

let score3 = null
console.log(score3); //null

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); // will show as a number
console.log(valueInNumber3); // here 0 will show

console.log("-------------------");5
let score4 = undefined
console.log(score4); // undefined

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); // will show as a number
console.log(valueInNumber4); // here NaN will show

console.log("-------------------");

let score5 = true
console.log(score5); //true

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5); // will show as a number
console.log(valueInNumber5); // here 1 will show for "true", and 0 for "false"

console.log("-------------------");

let score6 = "jeet"
console.log(score6); // jeet

let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6); // will show as a number
console.log(valueInNumber6); // here NaN will show

console.log("-------------------");

let score7 = 1
console.log(score7); // 1

let valueInNumber7 = Boolean(score7)
console.log(typeof valueInNumber7); // will show as a boolean
console.log(valueInNumber7); // here NaN will show

console.log("-------------------");
let a = "hello"
let b = " Jeet"
let c = a+b
console.log(c);

console.log("-------------------");

console.log("1" + 2); // keep in mind
console.log(1 + "2"); // keep in mind
console.log("1" + 2 + 2); // keep in mind
console.log(1 + 2 + "2"); // keep in mind



 