function countSheeps(arrayOfSheep) {
    let numSheep = 0
    for (let i = 0; i < arrayOfSheep.length; i++){
      if (arrayOfSheep[i]){
        numSheep++
      }
    }
    return numSheep
  }