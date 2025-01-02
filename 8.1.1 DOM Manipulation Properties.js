// Properties
/*
Here at properties of DOM manipulation we can get, set, change, or update the properties
    1/ tagName -- returns tag for element nodes
        --> headings.tagName
        --> ant.tagName
    2/ innerTag -- returns the text content of the element and all its children
    3/ innerHTML -- returns the plain text or HTML content in the element
    4/ textContent -- returns textual content even for hidden elements

YOU CAN USE THESE TAG NAMES AT "CONSOLE" SECTION

-----*******----- to be used at console section -----*******-----
USE -- document.body.firstchild [to access all the data of the first child]
USE -- document.querySelector("body") [to access the data of the body tag]
USE -- document.querySelector("body").children [to access the data about the children inside the body]
USE -- document.querySelector("div").children [to access the data about the children inside the div]

 GO TO THIS LINK AT THIS TIME STAMP -- https://youtu.be/7zcXPCt8Ck0?si=DL4KEawD9YXV6OIz&t=4148

*/

let heading = document.querySelector("h1")
console.dir(heading)



