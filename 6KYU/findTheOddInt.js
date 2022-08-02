




// turn each element into a string where the element is called "num" because ?????
// create an empty array called "filter"
// start a for loop less than the length of the array A
// use the filter method that creates a new array for where "num" is equal to A[i]
// if "filter" array length is not divisible by 2 meaning it is odd, then return filter[0]

function findOdd(A) {
    A.forEach(num => num.toString())
    let filter = []
    for (let i = 0; i < A.length; i++){
      filter = []
      filter = A.filter(num => num === A[i])
      if (filter.length % 2 === 1){
        return filter[0]
      }
    }
    return 0;
  }