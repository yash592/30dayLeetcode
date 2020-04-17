/*

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

*/

// Approach one using division

const productExceptSelf = (arr) => {
  let sum = arr.reduce((acc, curr) => acc * curr);

  let res = [];

  arr.forEach((element) => {
    res.push(sum / element);
  });
  return res;
};

const productExceptSelfOptimal = (arr) => {
  let leftArr = [];
  let rightArr = [];
  let result = [];

  console.log(arr.length);

  for (let i = 1; i < arr.length; i++) {
    leftArr[0] = 1;
    leftArr[i] = arr[i - 1] * leftArr[i - 1];
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    rightArr[arr.length - 1] = 1;
    rightArr[i] = arr[i + 1] * rightArr[i + 1];
  }
  for (let i = 0; i < leftArr.length; i++) {
    result.push(leftArr[i] * rightArr[i]);
  }
  return result;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelfOptimal(nums));

// 1     2      3      4

// left: [1, 1, 2, 6]
// right: [24, 12, 4, 1]

// left []
// right []
