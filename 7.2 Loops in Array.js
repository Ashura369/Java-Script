
// FOR LOOP
console.log("--------------------")
let a=[1,2,3,4,5,6,7,8,9]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

// FOR IN LOOP
console.log("--------------------")
let person = {
    name: "Alice",
    age: 25,
    ID: "techmbbi1063055",
    profession: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

// NESTED OBJECTS AT FOR IN LOOP
console.log("--------------------")
let student = {
    name: "Bob",
    marks: {
        math: 90,
        science: 85,
        english: 88
    }
}

for (let key in student) {
    if (typeof student[key] === "object") {
        console.log(`${key}:`)
        for (let subKey in student[key]) {
            console.log(`  ${subKey}: ${student[key][subKey]}`)
        }
    } else {
        console.log(`${key}: ${student[key]}`)
    }
}


// FOR OF LOOP
let king=[11,22,33,44,55,66,77,88,99]
for (const element of king) {
    console.log(element)
}