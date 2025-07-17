// #1
function calcNotes() {
   const notes = [[9, 4, 3], [2, 4, 10], [1, 9, 2], [7, 8]]

   function calcAverage(total, qtdNotes) {
      return total / qtdNotes
   }

   function addNote(arr, student, note) {
      arr[student].push(note)
   }

   // addNote(notes, 1, 6)

   let total = 0;
   let average = 0.0;
   for (let row = 0; row < notes.length; ++row) {
      for (let col = 0; col < notes[row].length; ++col) {
         total += notes[row][col];
      }
      average = calcAverage(total, notes[row].length)
      console.log("Student " + parseInt(row + 1) + " average: " +
         average.toFixed(2));
      total = 0;
      average = 0.0;
   }
}
// calcNotes()

// #2
function reverseWords() {
   const words = ['developer', 'javascript', 'arrays', 'reverse'];
   words.reverse();
   console.log(words);

}
// reverseWords()

// #3

function weekTemps() {
   this.dataStore = [[], [], [], []];
   this.add = add;
   this.average = average;
   this.monthAverage = monthAverage;
   this.weekAverage = weekAverage;
   this.allWeeksAverages = allWeeksAverages;
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

const month = new weekTemps();

month.add(0, 52);
month.add(0, 55);
month.add(0, 61);
month.add(0, 65);
month.add(0, 55);
month.add(0, 50);
month.add(0, 52);

month.add(1, 48);
month.add(1, 50);
month.add(1, 52);
month.add(1, 49);
month.add(1, 51);
month.add(1, 53);
month.add(1, 54);

month.add(2, 60);
month.add(2, 62);
month.add(2, 58);
month.add(2, 64);
month.add(2, 61);
month.add(2, 59);
month.add(2, 63);

month.add(3, 45);
month.add(3, 47);
month.add(3, 44);
month.add(3, 46);
month.add(3, 48);
month.add(3, 50);
month.add(3, 49);

console.log(month.monthAverage().toFixed(2));
console.log(month.weekAverage(1).toFixed(2));
month.allWeeksAverages();
console.log(thisWeek.average());

// #4
function lettersInWords() {
   const letters = [['j'], ['a'], ['v'], ['a'], ['s'], ['c'], ['r'], ['i'], ['p'], ['t']]
   function joinLetters() {
      const word = letters.map((l) => l[0]).join("")
      console.log(word);

   }
   joinLetters()

}
// lettersInWords()