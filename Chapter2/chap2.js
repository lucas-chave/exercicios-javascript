const notes = [[9, 4, 3], [2, 4, 10], [1, 9, 2], [7, 8]]

function calcAverage(total, qtdNotes) {
   return total / qtdNotes
}

function addNote(arr, student, note) {
   arr[student].push(note)
}

function calcNotes(matrixNotes) {
   addNote(matrixNotes, 1, 6)

   let total = 0;
   let average = 0.0;
   for (let row = 0; row < matrixNotes.length; ++row) {
      for (let col = 0; col < matrixNotes[row].length; ++col) {
         total += matrixNotes[row][col];
      }
      average = calcAverage(total, matrixNotes[row].length)
      console.log("Student " + parseInt(row + 1) + " average: " +
         average.toFixed(2));
      total = 0;
      average = 0.0;
   }
}
// calcNotes(notes)

// #2
const words = ['developer', 'javascript', 'arrays', 'reverse'];

function reverseWords(wordsArr) {
   wordsArr.reverse();
   console.log(wordsArr);
   return wordsArr;
}
// reverseWords(words);

// #3


// function weekTemps() {
//    this.dataStore = [[], [], [], []];
//    this.add = add;
//    this.average = average;
//    this.monthAverage = monthAverage;
//    this.weekAverage = weekAverage;
//    this.allWeeksAverages = allWeeksAverages;
// }

let week = {
   dataStore: [[], [], [], []]
};

function setupWeekTemps(week) {
   week.add = add;
   week.average = average;
   week.monthAverage = monthAverage;
   week.weekAverage = weekAverage;
   week.allWeeksAverages = allWeeksAverages;
}

function add(week, temp) {
   if (week >= 0 && week < this.dataStore.length) {
      this.dataStore[week].push(temp);
   } else {
      console.log("Semana inválida.");
   }
}

function monthAverage() {
   let total = 0;
   let count = 0;
   for (let week of this.dataStore) {
      for (let day of week) {
         total += day;
         count++;
      }
   }
   return count === 0 ? 0 : total / count;
}

function weekAverage(weekIndex) {
   if (weekIndex < 0 || weekIndex >= this.dataStore.length) {
      return "Semana inválida";
   }
   const week = this.dataStore[weekIndex];
   let total = 0;
   for (let temp of week) {
      total += temp;
   }
   return week.length === 0 ? 0 : total / week.length;
}

function allWeeksAverages() {
   for (let i = 0; i < this.dataStore.length; i++) {
      console.log(`Semana ${i + 1}: média = ${this.weekAverage(i).toFixed(2)}`);
   }
}

function average() {
   let total = 0;
   for (let i = 0; i < this.dataStore.length; ++i) {
      total += this.dataStore[i];
   }
   return total / this.dataStore.length;
}

// const month = new weekTemps();
setupWeekTemps(week)
const monthArr = [
   [52, 55, 61, 65, 55, 50, 52],
   [48, 50, 52, 49, 51, 53, 54],
   [60, 62, 58, 64, 61, 59, 63],
   [45, 47, 44, 46, 48, 50, 49]
];

monthArr.forEach((weekDays, index) => {
   weekDays.forEach((temp) => {
      week.add(index, temp);
   });
});

week.allWeeksAverages();

// #4
function lettersInWords() {
   const letters = [['j'], ['a'], ['v'], ['a'], ['s'], ['c'], ['r'], ['i'], ['p'], ['t']]
   function joinLetters() {
      const word = letters.map((l) => l[0]).join("")
      console.log(word);
      return word;
   }

   return joinLetters()

}
// lettersInWords()

module.exports = { calcNotes, reverseWords, setupWeekTemps, lettersInWords };
