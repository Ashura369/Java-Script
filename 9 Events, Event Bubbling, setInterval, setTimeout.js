/*
There are different types of events in js. An events is bascially a change in the state of an object.

Types : --
    1/ mouse events (cliuck, double click etc.)
    2/ keyboard events (keypress, keyup, keydown etc.)
    3/ form events (submit etc.)
    4/ print event & many more

WEBSITE LINK : 


*/





// USING BUTTON

/*
let button = document.getElementById("btn")

button.addEventListener("click", () =>{
    alert("You clicked on the button")
})
*/

let button = document.getElementById("btn")

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "Yooo ! you clicked here and changed the button"
})


button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "Yuppp ! you just used the <b> double click </b>"
})


let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", ()=> {
    document.querySelector(".para").innerHTML = "Hii there"
})


