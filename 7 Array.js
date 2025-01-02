let arr=[1,2,3,4,5]
// index=0,1,2,3,4

console.log(arr)
    // TO ACCESS THE ARRAY LINKED WITH ITS HTML FILE, FIRST GO TO THE HTML FILR, CLICK "OPEN WITH LIVE SERVER", THEN CLICK "INSPECT", THEN CLICK "CONSOLE"
    // THERE YOU WILL BE ABLE TO ACCESS THE ARRAY
console.log(arr.length)
console.log(arr[0])

arr[0]=33
console.log(arr[0])
    // here we have changed the value of arr[0] from 1 to 33
    // the same thing is not applicable in case of strings, you cant change the letters

console.log(arr.toString()) 
    // here arrays will be printed one by one in an array format

console.log(arr.join(" and "))
    // here "," will be replace by "and" in the array

console.log(arr.pop())
    // it removes the last element in the array

console.log(arr.shift())
    // it removes the first element of the array

console.log(arr.push(100, 56))
    // it adds more elements into the array
    
console.log(arr.unshift("99"))
    // it adds elements to the beginning of the array

// console.log(arr. delete(5))

console.log(arr)










