function passing(num) {
   return num >= 60;
}

const grades = [];
for (var i = 0; i < 20; ++i) {
   grades[i] = Math.floor(Math.random() * 101);
}
const passGrades = grades.filter(passing);
console.log(grades);
console.log(passGrades);
