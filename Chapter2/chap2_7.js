const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verifySomeElements(nums) {
   function isEven(num) {
      return num % 2 == 0;
   }

   let someEven = nums.some(isEven);

   if (someEven) {
      console.log("some numbers are even");
      return "some numbers are even"
   }
   else {
      console.log("no numbers are even");
      return "no number are even"
   }
}

// verifySomeElements(nums)

function sumNumberInArray(nums) {
   function add(runningTotal, currentValue) {
      return runningTotal + currentValue;
   }
   const sum = nums.reduce(add);
   console.log(sum);
   return sum
}
// sumNumberInArray()
const words = ["the ", "quick ", "brown ", "fox "];

function concatStrings(words) {
   function concat(accumulatedString, item) {
      return accumulatedString + item;
   }
   const sentence = words.reduce(concat);
   console.log(sentence);
   return sentence
}
// concatStrings()

function inverseArray() {
   function concat(accumulatedString, item) {
      return accumulatedString + item;
   }
   const sentence = words.reduceRight(concat);
   console.log(sentence);
   return sentence;
}
// inverseArray()

// Funções que interam e geram um novo array
const grades = [77, 65, 81, 92, 83];

function curve(grade) {
   return grade += 5;
}

function transformArrayWithMap(grades) {
   const newGrades = grades.map(curve);
   console.log(newGrades);
   return newGrades
}

// transformArrayWithMap()

function first(word) {
   return word[0];
}

function transformStrings(words) {
   // console.log(words);

   const acronym = words.map(first);
   console.log(acronym);

   console.log(acronym.join(""));
   return acronym.join("")
}
// transformStrings()


module.exports = {
   verifySomeElements,
   sumNumberInArray,
   concatStrings,
   inverseArray,
   transformArrayWithMap,
   transformStrings
};