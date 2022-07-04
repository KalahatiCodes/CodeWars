// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
function getMiddle(s){
  let x = s.length
  if (x % 2 === 0){
    return s[(x / 2) - 1] + s[x / 2]
  } else{
    return s[Math.floor(x / 2)]
  }
}