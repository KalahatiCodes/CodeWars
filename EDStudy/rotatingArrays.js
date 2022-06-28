// "Forcefully"
// Take something off of the end & put it on the front, (k) times
// The space complexity is O(1)

const rotateArray1 = function(nums, k) {
    for (let i = 0; i < k; i++) {
// add [whats in the parentheses] to the front of the array
// whats inside the parentheses: the last element of the array [that is being deleted from the end]
        nums.unshift(nums.pop());
    }
    return nums;
  }


//   the way educative does it (which works with n values that are negative)
// Normalize the rotations, so they do not exceed the length of the array. For example, for an array of length 10
// 10
// , rotating by 14
// 14
//  elements is the same as rotating by (14%10) 4 elements.
// Convert negative rotations to positive rotations.
// Reverse the elements of the original array.
// Reverse the elements from 0 to n-1
// Reverse the elements from n to length-1
// Let’s run this on the array below for n=2: 

let reverseArray = function(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  
  let rotateArray = function(nums, n) {
    let len = nums.length;
  
    // Normalizing the 'n' rotations
    n = n % len;
    if (n < 0) {
      // calculate the positive rotations needed.
      n = n + len;
    }
    // Let's partition the array based on rotations 'n'.
    reverseArray(nums, 0, len - 1);
    reverseArray(nums, 0, n - 1);
    reverseArray(nums, n, len - 1);
  };
  
  let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
  
  console.log("Array Before Rotation ");
  console.log(printArray(arr));
  
  rotateArray(arr, 2);
  
  console.log("Array After 2 Rotations ");
  console.log(printArray(arr));
