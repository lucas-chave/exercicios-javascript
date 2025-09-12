function isEven(num) {
   return num % 2 == 0;
}

const nums = [2, 4, 6, 7, 8, 10];

function verifyEveryNumbers(nums) {
   const even = nums.every(isEven);
   if (even) {
      console.log("all numbers are even");
      return 'all numbers are even'
   }
   else {
      console.log("some numbers are odd");
      return 'some numbers are odd'
   }
}

module.exports = { isEven, verifyEveryNumbers };
