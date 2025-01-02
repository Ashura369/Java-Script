let fooditems = [1,2,3,4,5,6,7,8,9]


// PUSH -- adds items ad the end of the array
fooditems.push(10, 11)
console.log(fooditems)

// POP -- delete from end and return
console.log("------------------------")
    // now the new array is [1,2,3,4,5,6,7,8,9,10,11]
fooditems.pop()
console.log(fooditems) // [1,2,3,4,5,6,7,8,9,10]


// toSTRING -- converts array into string
console.log("------------------------")
console.log(fooditems) // everything will be shown as array
console.log("--->", fooditems.toString()) // everything will be shown as string

// CONCAT -- joins multiple arrays and returns resualts
console.log("------------------------")
let marvel = ["hulk", "captain america", "iron man", "antman", "wasp", "deadpool"]
let dc = ["batman", "superman", "joker", "wonder woman", "x man"]

let heros = marvel.concat(dc)
console.log(heros)


// UNSHIFT -- add elements to the start
console.log("------------------------")
let fruits = ["apple", "banana", "mango", "kiwi"]

fruits.unshift("pineaple")
console.log(fruits)

// SHIFT -- delete from start
console.log("------------------------")
let names = ["jeet", "aman", "shruti", "anil", "utkalika"]
let value = names.shift()
console.log("deleted value is --> ", value)
    /*
    console.log(names.shift())
    console.log(names)
    */




// SLICE -- returns a piece of array (doesnt change anything in the original array)
console.log("------------------------")
let frts = ["apple", "banana", "mango", "kiwi", "pineapple"]

console.log(frts.slice(1,4)) // will print values from index 1 to index 4
console.log(frts.slice(2)) // will print values from index 2 to the end
console.log(frts.slice()) // copies all the arrays


// SPLICE -- change original array (add, remove, replace)
console.log("------------------------")
// format --> name.splice(starting index, delete count, new element we want to add)

let nums = [1,2,3,4,5,6,7,8,9,10]

// nums.splice(2) THIS WILL DELETE ALL THE ELEMENTS STARTING FROM INDEX 2
// nums.splice(2,2) THIS WILL DELETE THE 2 ELEMENTS FROM INDEX 2 OF THE ARRAY
nums.splice(2,2,101,103)
console.log(nums)
