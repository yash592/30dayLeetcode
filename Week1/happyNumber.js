/*

Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
1*1 + 9*9 = 82
8*8 + 2*2 = 68
6*6 + 8*8 = 100
1*1 + 0*0 + 0*0 = 1


However if input is 2, it will lead to an endless loop
Explanation:
2*2 = 4
4*4 = 16
1*1 + 6*6 = 37
3*3 + 7*7 = 58
5*5 + 8*8 = 89
8*8 + 9*9 = 145
1*1 + 4*4 + 5*5 = 42
4*4 + 2*2 = 20
2*2 + 0*0 = 4 we go back to where we started on step 1 so this will never be a happy number;
*/

const isHappy = (n) => {
  // initiate a set which is the easiest way to weed out duplicates
  let set = new Set();
  // keep running the loop till sum is not equal to 1
  while (n !== 1) {
    // however if the number is already in the set e.g 4 above, return false
    if (set.has(n)) {
      return false;
    } else {
      // else keep adding the sum
      set.add(n);
    }
    n = splitAndSum(n);
  }

  return n !== 1 ? false : true;
};

const splitAndSum = (n) => {
  // split the number and convert to string and then back to number
  let num = n.toString().split("").map(Number);

  // use reduce to calculate the sum of numbers

  return num.reduce((acc, curr) => {
    return acc + Math.pow(curr, 2);
  }, 0);
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
