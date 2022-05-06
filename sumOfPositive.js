function positiveSum(arr) {
    let sum=0
    arr.forEach(num => {
      if (num > 0){
        sum +=num
      }
    })
    return sum
  }

  