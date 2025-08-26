function square(num) {
  console.log(num, num * num);
}

function createArray() {
  const nums = [];
  for (let i = 0; i < 10; ++i) {
    nums[i] = i + 1;
  }
  return nums;
}

function runSquares() {
  const nums = createArray();
  nums.forEach(square);
}

module.exports = { square, createArray, runSquares };