// EDUCATIVE STUDY PRACTICE

// Sort an array of numbers 
let numbers = [5, 13, 1, 44, 32, 15, 500]

// Lowest to highest
let lowestToHighest = numbers.sort((a, b) => a - b);
//Output: [1,5,13,15,32,44,500]

//Highest to lowest
let highestToLowest = numbers.sort((a, b) => b-a);
//Output: [500,44,32,15,13,5,1]

// proper function
let numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);
// should return [99, 104, 140000]