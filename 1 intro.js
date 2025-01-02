console.log("Hello this is jeet")

var a=3;
var b=6;
    // one thing you must keep in mind is that, while naming the variable you can use "_" at the beginning but you cant use numbers at the beginning e.g. "55a" (not acceptable)
    // JS names are "Case sensitive". Harry & harry are different
console.log(a+b+3)
    // "console.log" workd as "cout" function of c++, used to print values

var c="Hello this is Ashura !!!" 
    //when we arite something on "" within these signs then they will be counted as strings, hence we can write sentences btwn them
console.log(c)

console.log(typeof a, typeof b, typeof c)
    // it will print as number number string, bcoz a and b are numbers and c is a string

const a1=10;
    // keep in mind that you cant add any value into this a1 variale bcoz this is a constant variable.
    // but if you remove the "const" and write "var" then you can change the value from 10 to another number

let d=33;
{
    let d=66;
    console.log(d) 
        // try commenting out the d=66, you will see changes
}

// DATA TYPES
let x="Ashura";
let y=22;
let z=3.55;
const p=true; //boolean
let q=undefined; //undefined
let r=null; //null or object
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// OBJECT
let o={
    "name" : "Ashura",
    "job role" : 5600
}
console.log(o)

    // ADDING ELEMENTS INTO THE OBJECT
    o.salary = "2 lakhs";
    console.log(o)

    // CHANGING THE VALUES
    o.salary = "3 lakhs";
    console.log(o)

// AN e.g.
console.log("the name is : " + x)