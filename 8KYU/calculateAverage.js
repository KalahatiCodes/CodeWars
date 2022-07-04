function findAverage(array) {
    if (array.length === 0){
      return 0
    } else{
      let sum = 0
      array.forEach(element => sum += element)
      let average = sum / array.length
      return average
    }
  }

  let arr = [1800,1900,1350,2400,1350,2650,1300,2200,1675,1200,1700,1500,1100,1400,2100,1100,1200]
  console.log(findAverage(arr))