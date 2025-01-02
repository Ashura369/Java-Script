// MOUSEOVER EFFECT


let box = document.getElementById("box")

box.addEventListener("mouseover", () => {
    document.querySelector("#box").innerHTML = "Hey, This is mouseover effect. You learned mouseover  effect"
})



// -----------------------------------------------------------------------------------------------------------------
let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    document.querySelector(".sect").innerHTML = "**********************"
})


/*
Event listeners are of two types : --
    1/ addEventListener
    2/ removeElementListener


*/

// REMOVE LISTENER
// it will be shown in console section
let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
    console.log("This is type case 1.")
})
btn2.addEventListener("click", () => {
    console.log("This is type case 2.")
})

// suppose you want to remove this type case 3 section
let caes3 = () => {
    console.log("This is type case 3.")
}

btn2.addEventListener("click", () => {
    console.log("This is type case 4.")
})

btn2.removeEventListener("click", case3)
