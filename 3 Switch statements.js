let food="cake"

switch(food){
    case "cake":
        console.log("i like cake")
        break
        // USING BREAK WILL STOP THE COMPILER TO STOP RUNNING THE NEXT CODE ONCE A GIVEN CONDITION IS SATISFIED

    case "nuts":
        console.log("i like nuts")
        break
    
    case "pizza":
        console.log("i like pizza")
        break
    
    case "apple":
    case "mango":
        console.log("this is a fruit")
        break
        // THIS IS AN EG OF A MULTIPLE STATEMENTS
        // WHERE YOU CAN PRINT SINGLE OUTPUT FOR MULTIPLE CONSITIONS
    
    default:
        console.log("not a valid input")
        break
}