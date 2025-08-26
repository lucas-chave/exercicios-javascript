function searchNameInArrayWithPosition() {
    const names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
    const name = "Mike";
    const firstPos = names.indexOf(name);
    console.log("First found " + name + " at position " + firstPos);
    const lastPos = names.lastIndexOf(name);
    console.log("Last found " + name + " at position " + lastPos);
}

// searchNameInArrayWithPosition()

// Strings representadas por um array
function stringsOfArrays() {
    const names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
    let namestr = names.join();
    console.log(namestr);
    namestr = names.toString();
    console.log(namestr);
}
stringsOfArrays()

module.exports = { searchNameInArrayWithPosition, stringsOfArrays };
