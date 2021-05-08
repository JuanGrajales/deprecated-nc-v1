// Challenge 1
// Use the filter method on the pets array given at line 1. Filter out only the pets that have 5 or less letters in their name. The code has been started for you at line 4.
// Challenge 2
// Use the filter method on the same pets array. Filter out only the pets whose names start with the letter 't'. The code has been started for you at line 9.
// Challenge 3
// Use the filter method on the numbers array given at line 13. Filter out only the numbers that are greater than 4.
// Bonus Challenge
// Filter out only the even numbers. Research the use of the modulo operator: %.

const pets = ["goldfish", "dog", "turtle", "tiger"];

//1
const petsShortNames = pets.filter(/* your code here */);
// The below line should console.log: ["dog", "tiger"]
console.log(petsShortNames);

//2 - uncomment line 9 and line 11 when you've finished challenge 1
//const petsTNames =
// The below line should console.log: ["turtle", "tiger"]
// console.log(petsTNames);

const numbers = [3, 7, 4, 5, 10];
//3 - uncomment line 15 and line 17
//const numbersBiggerThanFour =
// The below line should console.log: [7, 5, 10]
//console.log(numbersBiggerThanFour);

//Bonus - uncomment line 20 and line 22
//const evenNumbers =
// The below line should console.log: [4, 10]
//console.log(evenNumbers);
