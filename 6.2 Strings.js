let name = "jeet"
let repoCount = 50


console.log(name + repoCount + " is the value"); // this is called "Concatination"
    // the above method is outdated
    // hence try using the below

console.log(`Hello ! my name is ${name} and my repo count is ${repoCount}`); // called "string interpolation"

console.log(name.charAt(0)); // prints letter at 0 index
console.log(name.indexOf('t')); // prints index of letter "t"

console.log(name.substring(0, 3)); // prints letters from 0 to index 2. Excludes the indfex 3
console.log(name.slice(0, 3));
console.log(name.replace('jeet', 'biswajeet'));
console.log(name);


