// DATE AND TIME

let myDate = new Date()
console.log(myDate); // print date
console.log(myDate.toString()); // print date by using string, more readable now
console.log(myDate.toDateString()); // print date only
console.log(myDate.toLocaleString()); // print date and time in a proper manner
console.log(typeof myDate); // print object, bcoz date is an Object


console.log("----------------------------------")

let myDate2 = new Date(2023, 0, 23)
console.log(myDate2.toString());
console.log(myDate2.toDateString()); 
console.log(myDate2.toLocaleString());

/*
The Date constructor allows you to create a Date object by specifying year, month, and day, among other parameters. Here's how it works for "new Date(2023, 0, 23)":


--> 2023 (Year):
    This specifies the year. In this case, the year is 2023.

--> 0 (Month):
    The month is zero-based, meaning January is 0, February is 1, March is 2, and so on.
    Here, 0 corresponds to January in JS.

--> 23 (Day):
    This specifies the day of the month.
    In this case, it’s the 23rd day of January.

*/

console.log("----------------------------------")

let myDate3 = new Date("2000-06-03") // prints date in MM/DD/YY format
console.log(myDate3.toString());
console.log(myDate3.toDateString()); 
console.log(myDate3.toLocaleString());


console.log("----------------------------------")

let myDate4 = new Date("06-03-2000") 
console.log(myDate4.toString());
console.log(myDate4.toDateString()); 
console.log(myDate4.toLocaleString());


// TIME STAMP
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate4.getTime());
console.log(Date.now());

