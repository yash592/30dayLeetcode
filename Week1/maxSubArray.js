/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

-2, 1, -3, 4, -1, 2, 1, -5, 4 [4,-1,2,1] has largest sum = 6

set max = 0 and max at specific index = 0

add arr[i] to maxSoFar
  if its greater than zero update maxsofar or keep it as it is
  if maxSoFar > maxSum then update max sum or keep it as the previous value

*/

const maxSubArray = (nums) => {
  let maxSumHere = 0;
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    maxSumHere += nums[i];
    maxSumHere < 0 ? (maxSumHere = 0) : maxSumHere;
    maxSumHere > maxSum ? (maxSum = maxSumHere) : maxSum;
  }
  if (maxSum === 0) {
    return Math.min(...arr);
  }
  return maxSum;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr));

// [4,-1,2,1] has the largest sum = 6.

console.log(Math.min(...arr));
