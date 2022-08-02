// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// Paremeters taken in are a string of text
// Return will be a total count of characters that appear more than once
// Example: 'happy' should return 1 because there is only 1 value that appears more than it's first initial appearance.
// Set a count to 0. count will be a variable that is returned
// Create an empty object to hold all of the characters and their counts
// Iterate through each character of text, making sure to lowercase every element i
// if i doesn't appear to exist in the object create it by stating obj[i] = 1
// if i does appear then +1 for each occurance 
// then iterate through the obj 
// if obj[i] > 1 then +1 to count
// finally return count
function duplicateCount(text){
    let count = 0
    const obj = {}
    for (let i of text){
      i = i.toLowerCase()
      if (!obj[i]){
        obj[i] = 1
      }else {
        obj[i]++
      }
    }
    console.log('this is the obj',obj)
    for (let i in obj){
      if (obj[i] > 1){
        count++
      }
    }
    return count
  }