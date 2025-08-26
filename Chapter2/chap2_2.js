function searchNameInArray() {
   const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
   const name = 'Cynthia';

   const position = names.indexOf(name);
   if (position >= 0) {
      console.log("Found " + name + " at position " + position);
   }
   else {
      console.log(name + " not found in array.");
   }
}
searchNameInArray()

module.exports = { searchNameInArray };