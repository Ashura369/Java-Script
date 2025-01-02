let a="Ashura"
let b="Rohan"

console.log("Hello! My name is "+ a +", and "+ b +" is his friend...") //or
console.log(`Hello! My name is ${a}, and ${b} is his friend`)

// Making all letters capital ans small
let c="BoogeyMan"
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c.length) // the blank spaces used in the string are also counted in the length

// Slicing a string
console.log(c.slice(1,6)) // It only prints the letters btwn 1st letter and the 6th letter, rest are just omitted

// Replace
console.log(c.replace("Boogey", "Super")) // Here we placed Boogey with Super

// Concatenation
console.log(c.concat( " ZeroWorld", " Hii")) // Here we have added new words to the C string


