// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  let num = numbers.map(x=> x**2)
  let sum =0
  num.forEach(x => sum +=x)
  return sum
}

// first try
function squareSum(numbers){
    let squareNum = []
    numbers.forEach(number => squareNum.push(number ** 2))
    let sum = 0
    for (let i = 0; i < squareNum.length; i++){
      sum += squareNum[i]
    }
    return sum
  }