function gradesArray() {
   const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
   let total = 0;
   let average = 0.0;
   for (let row = 0; row < grades.length; ++row) {
      for (let col = 0; col < grades[row].length; ++col) {
         total += grades[row][col];
      }
      average = total / grades[row].length;
      console.log("Student " + parseInt(row + 1) + " average: " +
         average.toFixed(2));
      total = 0;
      average = 0.0;
   }
}
gradesArray()

function matrix(numrows, numcols, initial) {
   const arr = [];
   for (let i = 0; i < numrows; ++i) {
      const columns = [];
      for (let j = 0; j < numcols; ++j) {
         columns[j] = initial;
      }
      arr[i] = columns;
   }
   return arr;
}

function matrixNames() {
   const nums = matrix(5, 5, 0);
   console.log(nums[1][1]); // displays 0
   const names = matrix(3, 3, "");
   names[1][2] = "Joe";
   console.log(names[1][2]);
}
// matrixNames()
module.exports = { gradesArray, matrix, matrixNames };
