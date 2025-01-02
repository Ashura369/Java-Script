// FOR IN LOOP
console.log("THIS IS FOR IN LOOP")
let employee={
    name: "ashura",
    role: "full stack developer",
    habit: "coding",
    }

    for(let key in employee){
        console.log(key)
    }
    /* it will only print te keys not the valus stored inside them,
    to print the values stored inside just write "console.log(employee)" */

    // TO PRINT THE VALUES STORED INSIDE THE KEYS YOU CAN ALSO WRITE
    for(let key in employee){
        console.log(key, employee[key])
    }

    for(let key in employee){
        console.log(employee[key])
    }
    


    // KNOW THE DIFFERENCE BTWN BOTH THE ABOVE CODE AND THE BELOW CODE

    console.log(employee)



    console.log("eg for for in loop")
    let nums=[1,2,3,4,5,6]
    for(let key in nums){
        console.log(nums)
    }