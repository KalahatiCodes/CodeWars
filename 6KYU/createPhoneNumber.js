// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!



// first I will use unshift to add the first of the parentheses to the front of the line
// Then I will use splice to add the other at position 4. I will use comma 0 because it isn't replacing an element
// I will then use splice again with -4 counting back from the end to add the dash
// then I will connect the array using join to make it a string with no spaces unless indicated by the string contained within the original element
function createPhoneNumber(numbers){
    numbers.unshift('(')
    numbers.splice(4,0,') ')
    numbers.splice(-4,0,'-')
    return numbers.join('')
  }