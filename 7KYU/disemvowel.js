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