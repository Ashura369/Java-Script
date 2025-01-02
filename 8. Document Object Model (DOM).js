document.title = "Lion Sin Ashura"
            // here title of the page will be changed
alert("Hello, This is Lion Sin Ashura. Before clicking 'ok' you need to know that this is a alert tag")


console.log("Hello World")
window.console.log("Hello World 2") // here we didn't see any difference in the console system bcoz, "console.log" comes under "window"
console.log(window) // this will show all the objects stored inside the "window"
// "alert" ALSO COMES UNDER "window" OBJECT

// As we know that there are multiple objects inside the "window", so we will be accessing them now via "console.log"
console.log(window.document)     // will access "document" which is inside the "window"
console.log(window.document.body)    // will access "body" which is inside of "document" which also is stored inside of "window"

document.body.style.background = "green"  // we can also write this format at "console"
/*
It means, here we are accessing files as below...

DOCTYPE --> body --> stylesheet (link:css) --> background = choosing "Green" color
*/

