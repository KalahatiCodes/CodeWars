function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let total = 0
    classPoints.forEach (x => total += x)
    let avg = total/classPoints.length
    if (avg > yourPoints){
      return false
    } else {
      return true
    }
  }