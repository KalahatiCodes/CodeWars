// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  let check = str.split('')
  let count =0
  check.forEach(x => x === 'a'|| x === 'e'|| x === 'i'|| x === 'o'|| x === 'u'|| x === 'A'|| x === 'E'|| x === 'I'|| x === 'O'|| x === 'U' ? count += 1 : count+=0)
  return count;
}

  or

  function getCount(str) {
    let newStr = ''
    vowels = ['a','e','i','o','u','A','E','I','O','U']
    for (let i = 0; i < str.length; i++){
      if (vowels.includes(str[i] !== true)){
        newStr += str[i]
      }
    } return newStr
  }