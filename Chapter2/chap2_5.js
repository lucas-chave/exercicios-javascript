function square(num) {
  console.log(num, num * num);
}

const nums = [];
for (let i = 0; i < 10; ++i) {
  nums[i] = i + 1;
}
nums.forEach(square);
