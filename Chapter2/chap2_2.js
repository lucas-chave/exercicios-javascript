const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
const name = 'Cynthia';

function searchNameInArray(arrNames, name) {
   const position = arrNames.indexOf(name);
   if (position >= 0) {
      console.log("Found " + name + " at position " + position);
   }
   else {
      console.log(name + " not found in array.");
   }
}
searchNameInArray(names, name)

module.exports = { searchNameInArray };