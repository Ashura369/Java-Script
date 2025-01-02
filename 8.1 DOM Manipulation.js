// Accessing elements by ID from html (8. Document Object Model (DOM).html)
let header = document.getElementById("h1")
console.log(header)
console.dir(header)

// Accessing elements by Class from html
let headings = document.getElementsByClassName("heading")
console.dir(headings)
console.log(headings)


// Accessing elements by Tag names from HTML
let paras = document.getElementsByTagName("p")
console.dir(paras)
console.log(paras)


// Accessing elements by Query selector
let ant = document.querySelector("p") // here by doing this it will give the first element written as "p" (no matter if its a ID, class, or a tag)
console.log(ant)
    // this returns as "first element"

let ant2 = document.querySelectorAll("p") // here it will print all the elements which is written as "p" (no matter if its a ID, class, or a tag)
console.log(ant2)
    // this returns as "NodeList"
    // WHEN YOU PUT "." OR "#" AT THE TEXT INSIDE THE querySelectorAll IT WILL ONLY SELECT THE THAT SAME NAME ID OR CLASS

    