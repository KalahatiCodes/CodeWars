// NOT A CODEWAR, SEPARATE STUDY

let binarySearchRotated = function(nums, target) {
    //TODO: Write - Your - Code
    if (nums.includes(target)){
      return nums.indexOf(target)
    } else {
      return -1;
    }
  };

//   this is logarithmic because each iteration we go through the closer we are to finding the solution
// aka as time goes by the time left decreases to complete the function as the inputs increase