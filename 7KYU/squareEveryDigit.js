// make num a string
// split num into an array
// map to create a new array that squares every element
// join this new array with no spaces
// make a number
function squareDigits(num){
    return Number(String(num).split('').map(x => x**2).join(''))
  }