function square(num) {
  console.log(num, num * num)
}

function createArray(sizeArray) {
  const nums = [];
  for (let i = 0; i < sizeArray; ++i) {
    nums[i] = i + 1;
  }
  return nums;
}

function runSquares() {
  const sizeArray = 10
  const nums = createArray(sizeArray);
  nums.forEach(square);
}

runSquares()

module.exports = { square, createArray, runSquares };
