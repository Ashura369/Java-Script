const accId = 144553 // Const cant be changed
let accEmail = "biswa@gmail.com"
var accPassword = "12345" // In place of "var" try using "let"
accCity = "Jaipur"


console.log(accId)

console.log(accEmail);
accEmail = "Hii@gmail.com"
console.log(accEmail); // The value has been changed here


// Suppose you want to print all the variables here at  a single time, you can do the below

console.table([accId, accEmail, accPassword, accCity]) // a table will be shown in the terminal


