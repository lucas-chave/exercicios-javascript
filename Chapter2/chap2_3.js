const names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
const name = "Mike";

function searchNameInArrayWithPosition(names, name) {
    const firstPos = names.indexOf(name);
    console.log("First found " + name + " at position " + firstPos);
    const lastPos = names.lastIndexOf(name);
    console.log("Last found " + name + " at position " + lastPos);
}

// searchNameInArrayWithPosition(names, name)

// Strings representadas por um array
const namesStrings = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];

function stringsOfArrays(names) {
    let namestr = names.join();
    console.log(namestr);
    namestr = names.toString();
    console.log(namestr);
}
stringsOfArrays(namesStrings)

module.exports = { searchNameInArrayWithPosition, stringsOfArrays };
