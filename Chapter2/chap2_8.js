function isEven(num) {
   return num % 2 == 0;
}

function isOdd(num) {
   return num % 2 != 0;
}

const nums = [];
for (var i = 0; i < 20; ++i) {
   nums[i] = i + 1;
}
const evens = nums.filter(isEven);
console.log("Even numbers: ");
console.log(evens);
const odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds);