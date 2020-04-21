/* Given a non-empty array of integers, every element appears twice except for one. 
Find that single one.

Note:

Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

*/

const singleNumber = (nums) => {
  let obj = {};
  for (const i of nums) {
    console.log(i);
    obj[i] = (obj[i] || 0) + 1;
  }
  console.log(obj);

  for (i in obj) {
    if (obj[i] === 1) return i;
  }
};

// 1, 2, 1, 2, 4

// 0

const singleNumber2 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[i] === 0) {
        console.log(nums[j], nums[i]);
        break;
      }

      if (nums[j] - nums[i] !== 0) return i;
    }
  }
};

const nums = [4, 1, 2, 1, 2];
const nums1 = [1, 2, 1, 2, 4];

console.log(singleNumber(nums));
singleNumber2(nums1);
// singleNumber(4, 1, 2, 1, 2);
// singleNumber(1, 2, 1, 2, 4);
