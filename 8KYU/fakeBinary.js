// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(str){
    return str.split('').map(x => x >= 5 ? x = 1 : x =0).join('')
  
  }
  