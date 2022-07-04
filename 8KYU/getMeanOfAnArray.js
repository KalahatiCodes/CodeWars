function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let total = 0
    marks.forEach(x => total += x)
    let average = total/marks.length
    return Math.floor(average)
  }