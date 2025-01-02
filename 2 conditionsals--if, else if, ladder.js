console.log("Hello this is conditional class")

// "If statements"
let age=55

if (age>18){
    console.log("YOU CAN DRIVE")
}
else{
    console.log("YOU CANNOT DRIVE")
}

        // e.gs
        let a=3
        let b=6

        console.log(a + b)
        console.log(a - b)
        console.log(a / b)
        console.log(a * b)
        console.log(a ** b)
            // here a**b means, a to the power 6 = 729
        console.log(b % a)
            // Modulus / finding remainder

        console.log("+=")
            // try using -=, /=, *=, **=, %=
        a+=b
            // now age = 9
            console.log(a + b)
            console.log(a - b)
            console.log(a / b)
            console.log(a * b)

        // ==  equal to
        // !=  not equal to
        // ===  equal value and type
        // !==  not equal value or not equal type
        // >=  greater than equal to
        // <=  less than equal to
        // ?  ternary operator
        // &&  logical and
        // ||  logical or
        // !  logical not

// If...else if statements
let c=-60
if(c>50){
    console.log("C is bigger than 50 --> " + c)
}
else if(c==50){
    console.log("C is equal to 50 --> " + c)
}
else if(c<50 && c>=0){
    console.log("C is less than 50 --> " +c)
}
else{
    console.log("ERROR --> " + c)
}

        // e.g.
        /*
            a=6
            b=8

            if (a>b){
            let c= a-b;
            }

            else {
            let c = b-a;
            }

                THE SHORT FORM FOR THIS WILL BE --->
                let c = a>b ? (a-b) : (b-a);

        */



        /*
            let a = "5"; ((this is a string))
            let b = 5; ((this is an integer))

            console.log(a == b);  // true (values are the same after type coercion)
            console.log(a === b); // false (different types: string and number)
        */

        /*

        console.log vs document.write

        1. console.log
            Purpose: It is a priunting statement, which are used to see the output in web browser (used for clint purposes)
            Output: Displays messages or values in the browser's developer console.
            Use Case:
                Debugging during development.
                Logging information that doesn't need to be visible on the web page.
            Example:
                console.log("This is a debug message");
                let sum = 5 + 10;
                console.log("The sum is:", sum);
            
            The output is not visible to users browsing the page.
            Useful for developers to trace the program's execution and check values.

        2. document.write
            Purpose: Writes content directly to the web page.
            Output: Inserts the provided text/HTML into the browser window.
            Use Case:
                Quickly testing or displaying output on the webpage (not recommended for modern web development).
            Example:
                document.write("Hello, World!");
                let sum = 5 + 10;
                document.write("<p>The sum is: " + sum + "</p>");
            
            If called after the page has loaded, it can overwrite the entire HTML content.
            Less commonly used in modern web development due to its destructive behavior and lack of flexibility.

        */