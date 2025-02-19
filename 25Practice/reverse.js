// Reverse string.
let str = "Hello Developer How are Doing";
let words = str.split(" ").map(word => word.split("").reverse().join(""));
console.log(words.join(' '));
