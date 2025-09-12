function passing(num) {
   return num >= 60;
}

function generateGrades(sizeGrade) {
   const grades = [];
   for (let i = 0; i < sizeGrade; ++i) {
      grades[i] = Math.floor(Math.random() * 101);
   }
   const passGrades = grades.filter(passing);

   console.log(grades);
   console.log(passGrades);

   return { grades, passGrades };
}

generateGrades(20);

module.exports = { passing, generateGrades };
