function getCount(str) {
    let check = str.split('')
    let count =0
    check.forEach(x => (x === 'a'|| x === 'e'|| x === 'i'|| x === 'o'|| x === 'u') ? count += 1 : count+=0)
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