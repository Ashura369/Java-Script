let tinderUser ={}

tinderUser.id = "123a" // assigning id to variable
tinderUser.name = "Biswajeet"
tinderUser.isLoggedIn = false

console.log(tinderUser);


console.log("-----------------------");

let regularUser = {
    email: "jeet36933@gmail.com",
    fullName: {
        firstName: "Biswajeet",
        lastName: "Pradhan",
    },
    about: {
        address: "abcd",
        houseNo: "035",
        landmark: "Shiva Temple"
    }
}

console.log(regularUser); // prints the whole 
console.log(regularUser.fullName); // prints the fullName section

console.log("----> ", Object.keys(regularUser)); // will only print the keys (headings)
console.log("----> ", Object.values(regularUser)); // will only print the values which are stored inside the keys
console.log("----> ", Object.entries(regularUser)); // it will print the keys and their values in sigle arrays (the same applicable for other keys and entries)



console.log(regularUser.hasOwnProperty(`fullName`)); // will show true, bcoz this key is available, Only applicable for keys and not for values
console.log(regularUser.hasOwnProperty(`Biswajeet`)); // will show false bcoz this is a value
console.log(regularUser.hasOwnProperty(`name`)); // false bcoz no such key available



console.log("-----------------------");

let obj1 = {
    1: "a",
    2: "b"
}
let obj2 = {
    3: "c",
    4: "d"
}
    // we can merge the above two objects by doing the below

    let obj3 = Object.assign(obj1, obj2) // merged the two objects
    console.log(obj3);

    // WE CANNOT USE "concat" METHOD WHILE USING objects
    // concat IS ONLY APPLICABLE TO arrays 

    let obj4 = {...obj1, ...obj2} // this is another way of merging two objects
    console.log(obj4);
    

console.log("-----------------------");


// Now we will be using "array of objects", here objects will be used inside of arrays

let users = [
    {
        name1:"aman",
        location: "Naikenpali",
        gender: "Male"
    },
    {
        name2: "jeet",
        location: "Sambalpur",
        gender: "Male"
    },
    {
        name3: "anil",
        location: "Dunguripali",
        gender: "Male"
    }
]
console.log(users); // prints all objects

console.log(users[0]); // prints index 0 user
console.log(users[0].name1); // prints index 0 user name







