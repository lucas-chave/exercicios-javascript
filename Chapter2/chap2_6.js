function isEven(num) {
   return num % 2 == 0;
}

function verifyEveryNumbers() {
   const nums = [2, 4, 6, 7, 8, 10];
   const even = nums.every(isEven);
   if (even) {
      console.log("all numbers are even");
   }
   else {
      console.log("some numbers are odd");
   }
}

module.exports = { isEven, verifyEveryNumbers };
