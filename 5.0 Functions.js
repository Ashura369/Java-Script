function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}


console.log(sayMyName); // will not print the keys and values
sayMyName() // print the keys and values

console.log("---------------------------------------------------");

// FINDING SUM

/*
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(10, 20)

*/

function addTwoNumbers(num1, num2){
    return num1 + num2
}

let resualt = addTwoNumbers(10, 20)
console.log("method 1 -- ", resualt);


console.log("method 2 -- ", addTwoNumbers(10, 20));


console.log("---------------------------------------------------");


function loginUserMessage(userName){
    
    return `${userName} just logged in`
}

console.log(loginUserMessage("Biswajeet"));


console.log("---------------------------------------------------");
// Use this function when no username is mention

function loginUserMessage2(userName2){
    if (userName2 === undefined) {
        return "PLz enter the username"
    }
    return `${userName2} just logged in`
}

console.log(loginUserMessage2()); // no username is mentioned
