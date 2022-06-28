// EDUCATIVE STUDY PRACTICE

// Sort an array of numbers 
let numbers = [5, 13, 1, 44, 32, 15, 500]

// Lowest to highest
let lowestToHighest = numbers.sort((a, b) => a - b);
//Output: [1,5,13,15,32,44,500]

//Highest to lowest
let highestToLowest = numbers.sort((a, b) => b-a);
//Output: [500,44,32,15,13,5,1]

