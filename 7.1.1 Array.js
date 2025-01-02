let arr = [0,1,2,3,4,5,6]
let heros = ["Spidy, Iron"]

let arr2 = new Array(7,8,9,10)

arr.push(999) // adds element at the last
console.log(arr)

arr.unshift(111) // adds element to the first
console.log(arr);

arr.shift() // removes element from the first
console.log(arr);


console.log("----------------------------------------------");


let newArr = arr.join()
console.log(arr); // will print the numbers as an array
console.log(newArr); // will print the numbers as a string
    console.log(typeof newArr);
    


