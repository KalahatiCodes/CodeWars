// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


// first time
function makeNegative(num) {
    // Code?
  if(num <= 0){   
    return num;
  } else{   return -Math.abs(num); 
        }
  }
  
  // or
  function makeNegative(num) {
    if(num>0){
      return -num
    } if (num=0){
      return 0
    } else {
      return num
    }
  }