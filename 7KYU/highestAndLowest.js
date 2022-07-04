function highAndLow(numbers){
    // create a new array that organizes og array from lowest to highest
    let array = numbers.split(' ').sort((a,b) => a-b)
    // return 
    return array[array.length -1] + ' ' + array[0]
  }