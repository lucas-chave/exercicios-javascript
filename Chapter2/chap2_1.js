// Criando arrays com strings
const sentence = "the quick brown fox jumped over the lazy dog";

function creatingArraysFromStrings(sentence) {
   const words = sentence.split(" ");
   for (let i = 0; i < words.length; ++i) {
      console.log("word " + i + ": " + words[i]);
   }
   return words;
}
// creatingArraysFromStrings(sentence)

// Soma de números dentro de um array
const numbers = [1, 2, 3, 5, 8, 13, 21];

function sumNumbers(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; ++i) {
      sum += numbers[i];
   }
   console.log(sum);
   return sum;
}
// sumNumbers(numbers);

// Agregando arrays
function aggregateArrays(arrNum) {
   const nums = [];
   for (let i = 0; i < arrNum; ++i) {
      nums[i] = i + 1;
   }
   const samenums = nums;
   nums[0] = 400;
   return { nums, samenums };
}
console.log(aggregateArrays());

function copy(arr1, arr2) {
   for (let i = 0; i < arr1.length; ++i) {
      arr2[i] = arr1[i]
   }
   return arr2;
}

module.exports = { creatingArraysFromStrings, sumNumbers, aggregateArrays, copy };
