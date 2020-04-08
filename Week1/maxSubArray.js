// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// -2, 1, -3, 4, -1, 2, 1, -5, 4

// set initial index = 0
// set initial max sum = arr[0]
// loop from i = 1 till end of array

// add to

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
  let maxSumHere = 0;
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    maxSumHere += nums[i];
    maxSumHere < 0 ? (maxSumHere = 0) : maxSumHere;
    maxSumHere > maxSum ? (maxSum = maxSumHere) : 0;
  }
  if (maxSum === 0) {
    return Math.min(...arr);
  }
  return maxSum;
};

console.log(maxSubArray(arr));

console.log(Math.min(...arr));
