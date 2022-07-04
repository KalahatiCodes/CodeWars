
function rentalCarCost(d) {
    // Your solution here
    if (d < 3){
      return d*40
    } if (d > 2 && d < 7){
      return d*40-20
    } else {
      return d*40-50
    }
  }