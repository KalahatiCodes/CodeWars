function squareSum(numbers){
    let squareNum = []
    numbers.forEach(number => squareNum.push(number ** 2))
    let sum = 0
    for (let i = 0; i < squareNum.length; i++){
      sum += squareNum[i]
    }
    return sum
  }