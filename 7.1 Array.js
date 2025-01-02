let a=[1,2,3]
let b=[4,5,6]
let c=[7,8,9]

console.log(a.concat(b, c)) // adds b and c value to a

// Sort
let d=[6,8,4,9,0,1,7,3,2,5]
console.log(d.sort()) // this prints the array in an ordered manner

// Splice
d.splice(2,3) // prints 3 elements starting from index 2
    // LEARN ABOUT COMPLETE "SPLICE" FROM YT
console.log("Splice -----> ",d);


// Slice
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits.slice(1, 4);

console.log("Slice -----> ", slicedFruits); // Output: ["banana", "cherry", "date"]  // It will print from index 1 to index 4

// Reverse
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.reverse()); // Output: [5, 4, 3, 2, 1]
