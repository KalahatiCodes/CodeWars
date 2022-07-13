// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// make num a string
// split num into an array
// map to create a new array that squares every element
// join this new array with no spaces
// make a number

function squareDigits(num){
    return Number(String(num).split('').map(x => x**2).join(''))
  }

  function squareDigits(num){
    let newNum = Number(String(num).split('').map(x=> x**2).join(''))
    return newNum;
  }