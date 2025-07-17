// Criando arrays com strings
function creatingArraysFromStrings() {
   const sentence = "the quick brown fox jumped over the lazy dog";
   const words = sentence.split(" ");
   for (let i = 0; i < words.length; ++i) {
      console.log("word " + i + ": " + words[i]);
   }
}
// creatingArraysFromStrings()

// Soma de números dentro de um array
function sumNumbers() {
   const numbers = [1, 2, 3, 5, 8, 13, 21];
   const sum = 0;
   for (let i = 0; i < numbers.length; ++i) {
      sum += numbers[i];
   }
   console.log(sum);
}
// sumNumbers();

// Agregando arrays
function aggregateArrays() {
   const nums = [];
   for (let i = 0; i < 10; ++i) {
      nums[i] = i + 1;
   }
   const samenums = nums;
   nums[0] = 400;
   console.log(samenums);

}
// aggregateArrays()

function copy(arr1, arr2) {
   for (let i = 0; i < arr1.length; ++i) {
      arr2[i] = arr1[i]
   }
}

const nums = [];

for (let i = 0; i < 100; ++i) {
   nums[i] = i + 1;
}

const samenums = [];
copy(nums, samenums);
nums[0] = 400;
// console.log(samenums, '/', nums);
