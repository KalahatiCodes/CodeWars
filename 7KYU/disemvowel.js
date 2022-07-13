// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    // create new string
    let newStr = ''
    // create an array of vowels to avoid
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    // go the length of the string
    for (let i = 0; i < str.length; i++){
    // if the array of vowels contains does not the element i of the string add to the new string 
        if (vowels.includes(str[i]) !== true){
          newStr += str[i]
        }
    }
    return newStr;
  }