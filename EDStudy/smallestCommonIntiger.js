let findLeastCommonNumber = function(arr1, arr2, arr3) {
    // Initialize starting indexes for arr1, arr2 and arr3
    let i = 0;
    let j = 0;
    let k = 0;
    // Iterate through three arrays 
    while (i < arr1.length && j < arr2.length && k < arr3.length) { 
      // Finding the smallest common number
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        return arr1[i];
      } 
      // Let's increment the iterator
      // for the smallest value.  
      if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
        i++;
      } 
      else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
        j++;
      }     
      else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
        k++;
      }   
    //   
    }
    return -1;
  };
  
  let v1 = [6, 7, 10, 25, 30, 63, 64];
  let v2 = [0, 4, 5, 6, 7, 8, 50];
  let v3 = [1, 6, 10, 14];
  console.log("Array 1: " + printArray(v1));
  console.log("Array 2: " + printArray(v2));
  console.log("Array 3: " + printArray(v3));
  console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));