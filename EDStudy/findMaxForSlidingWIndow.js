// LEON THIS IS NOT A CODE WAR THIS IS SEPARATE PRACTICE PLEASE DON'T USE THIS ONE (AT LEAST AS OF THE MOMENT I AM PRACTICING THIS LOL THANK YOU)

let findMaxSlidingWindow = function(arr, windowSize) {
    let result = [];
    
    // if the length of the array is zero meaning it is empty then return result which is an empty array
    if(arr.length == 0) {
      return result;
    }
    // If window_size is greater than the length of the array, then this sets the window size to the length
    if (windowSize > arr.length) {
      windowSize = arr.length;
    }
    // Initializing an array (queue) that can be push[ed] and pop[ped] for storing indices as we iterate through the array
    let window = [];
  
    //find out max for first window
    // using a for loop, we set i to be less than the window size. So if our window size is 3 it will only iterate through elements 0-2 (aka 3 placements)
    for (let i = 0; i < windowSize; i++) {
      // For every element, if it is equal to or more than the last element in the window array, pop [remove] the last element
      while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
        window.pop();
      } 
      // push [Add] current element to the back of the queue
      window.push(i);
    }
    // Appending the largest element in the window to the result
    result.push(arr[window[0]])
    
    for (let i = windowSize; i < arr.length; i++) {
      // remove all numbers that are smaller than current number
      // from the tail of list
      while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
        window.pop();
      }
      
      // Remove first index from the window deque if 
      // it doesn't fall in the current window anymore
      if (window.length > 0 && (window[0] <= i - windowSize)) {
        window.shift();
      }
      // Add current element at the back of the queue
      window.push(i);
      result.push(arr[window[0]]);
    } 
    return result;
  };
  
  let targetList = [3,2,1,2];
  let arrList = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], [4, 5, 6, 1, 2, 3], [9, 5, 3, 1, 6, 3]];
  
  for (let i=0; i< arrList.length; i++){
    console.log((i + 1) + ". Original list:\t" + printArray(arrList[i]));
    console.log("   Window size:\t\t" +  targetList[i]);
    console.log("   Max:\t\t\t" +  printArray(findMaxSlidingWindow(arrList[i], targetList[i]))); 
    console.log("-----------------------------------------------------------------------------------------------------\n")
  }
  