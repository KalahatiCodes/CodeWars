function sum (numbers) {
    if (numbers.length === 0){
      return 0
    }else{
      let total = 0
      numbers.forEach(x => total += x)
      return total
    }
  };