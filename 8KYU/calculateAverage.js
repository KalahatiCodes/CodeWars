function find_average(array) {
    if (array.length === 0){
      return 0
    } else{
      let sum = 0
      array.forEach(element => sum += element)
      let average = sum / array.length
      return average
      
    }
  }