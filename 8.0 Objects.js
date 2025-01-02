// OBJECT LITERALS

let jsUser = {
    name: "Biswajeet Pradhan",
    age: 24,
    location: "BBSR",
    email: "biswajeet3838@gmail.com",
    lastLogIn: "Friday"
}

console.log(jsUser); // print whole objects
console.log(jsUser.name); // print name only
console.log(jsUser.age);
console.log(jsUser.location);
console.log(jsUser.email);
console.log(jsUser.lastLogIn);

jsUser.email = "jeet36933@gmail.com" // changed the email

jsUser.greeting = function(){
    console.log(`Namaste, Welcome to JS ${this.name}`);
}

jsUser.greeting() // prints the greetings section
console.log(jsUser.greetings);

