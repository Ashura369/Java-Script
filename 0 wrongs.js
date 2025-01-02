// Write a function to count the number of vowels in a string

function countVowels(str) {
    let vowels = "aeiouAEIOU"; // String containing all vowels (lowercase and uppercase)
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) { // Check if the current character is a vowel
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript is awesome")); // Output: 8
console.log(countVowels("rhythm")); // Output: 0 (No vowels)
