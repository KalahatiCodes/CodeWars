// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let lengthW = []
    s.split(' ').forEach(x=> lengthW.push(x.length))
    lengthW.sort((a,b)=>a-b)
    return lengthW[0]
  }