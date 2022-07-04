// car runs on about 25 miles per gallon
// There are 2 gallons left
// nearest pump is 50 miles away

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    let milesLeft = mpg*fuelLeft 
    if (milesLeft >= distanceToPump){
      return true
    } else {
      return false
    }
  };