// LOOPS IN ARRAYS

let heros = ["Iron Man", "Ant Man", "Hulk", "Wasp", "Captain America", "Dr Strange"]
console.log("-----------------------------------------------------------------")

for (let idx = 0; idx < heros.length; idx++) {
    const element = heros[idx];

    console.log(heros[idx]) // prints all the elements in the array  
} 

// FOR OF LOOP
console.log("-----------------------------------------------------------------")
for (const idx2 of heros) {
    console.log(idx2)
    
}