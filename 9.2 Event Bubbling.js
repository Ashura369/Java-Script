document.querySelector(".child").addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("You clicked Child")
})

document.querySelector(".childcon").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("You clicked on childcon")
})

document.querySelector(".con").addEventListener("click", () => {
    alert("You clicked on con")
})

// Here bubbling means, once you click on the child, then you will automatically be clicking on the .childcon and its parent .con

// just try removing the "e" from (e) and try removing "e.stopPropagation()"
// when you put e.stopPropagation the event bubbling stops after that specific element