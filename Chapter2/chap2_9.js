function passing(num) {
   return num >= 60;
}

function generateGrades() {
   const grades = [];
   for (let i = 0; i < 20; ++i) {
      grades[i] = Math.floor(Math.random() * 101);
   }
   const passGrades = grades.filter(passing);

   console.log(grades);
   console.log(passGrades);

   return { grades, passGrades };
}

module.exports = { passing, generateGrades };
