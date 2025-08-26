function verifySomeElements() {
   function isEven(num) {
      return num % 2 == 0;
   }

   let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let someEven = nums.some(isEven);
   if (someEven) {
      console.log("some numbers are even");
   }
   else {
      console.log("no numbers are even");
   }
   nums = [1, 3, 5, 7, 9];
   someEven = nums.some(isEven);
   if (someEven) {
      console.log("some numbers are even");
   }
   else {
      console.log("no numbers are even");
   }
}
// verifySomeElements()

function sumNumberInArray() {
   function add(runningTotal, currentValue) {
      return runningTotal + currentValue;
   }

   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const sum = nums.reduce(add);
   console.log(sum);
}
// sumNumberInArray()

function concatStrings() {
   function concat(accumulatedString, item) {
      return accumulatedString + item;
   }
   const words = ["the ", "quick ", "brown ", "fox "];
   const sentence = words.reduce(concat);
   console.log(sentence);
}
// concatStrings()

function inverseArray() {
   function concat(accumulatedString, item) {
      return accumulatedString + item;
   }
   const words = ["the ", "quick ", "brown ", "fox "];
   const sentence = words.reduceRight(concat);
   console.log(sentence);
}
// inverseArray()

// Funções que interam e geram um novo array
function transformArrayWithMap() {
   function curve(grade) {
      return grade += 5;
   }
   const grades = [77, 65, 81, 92, 83];
   const newgrades = grades.map(curve);
   console.log(newgrades);
}

// transformArrayWithMap()

function transformStrings() {
   function first(word) {
      return word[0];
   }
   const words = ["for", "your", "information"];
   // console.log(words);

   const acronym = words.map(first);
   console.log(acronym);

   console.log(acronym.join(""));
}
transformStrings()


module.exports = {
   verifySomeElements,
   sumNumberInArray,
   concatStrings,
   inverseArray,
   transformArrayWithMap,
   transformStrings
};