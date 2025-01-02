/*
Two types of memory
1/ stack memory
2/ heap memmory

*/

let myChannelName = "jeet369"
let anotherName = myChannelName
anotherName = "biswajeet369" // here we changed the value

console.log(anotherName);

console.log("-------------------");

let userOne = {
    email: "biswajeet36933@gmail.com",
    UPI : 123456,
    Name : "Biswajeet Pradhan"
}

let userTwo = userOne
userTwo.email = "ashura36933@outlook.com" // chnaging the value

console.log("----->", userOne.email); // the value will also be changed in "userOne"
console.log("----->", userTwo.email);

// YOU CAN TRY CHANGING OTHER VALUES AND PRINTING IT


