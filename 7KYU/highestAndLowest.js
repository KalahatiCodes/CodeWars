// return the highest and lowest number
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){
    // create a new array that organizes og array from lowest to highest
    let array = numbers.split(' ').sort((a,b) => a-b)
    // return 
    return array[array.length -1] + ' ' + array[0]
  }