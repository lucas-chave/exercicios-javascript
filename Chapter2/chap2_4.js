// Usando o concat
function creatingArraysFromExistingArraysWithIndexOf() {
    const cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
    const dmp = ["Raymond", "Cynthia", "Bryan"]
    let it = cis.concat(dmp)
    console.log(it)
    it = dmp.concat(cis)
    console.log(it)
}
// creatingArraysFromExistingArrays()

// Usando o splice
function createArraysFromExistingArraysWithSplice() {
    const itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"]
    const dmpDept = itDiv.splice(3, 3)
    const cisDept = itDiv
    console.log(dmpDept)
    console.log(cisDept)
}
// createArraysFromExistingArraysWithSplice()

// Modificando um array
function modifyArrays() {
    const nums = [1, 2, 3, 4, 5];
    console.log(nums);
    nums.push(6);
    console.log(nums);
}
// modifyArrays()

function modifyArrayWithLength() {
    const nums = [1, 2, 3, 4, 5];
    console.log(nums);
    nums[nums.length] = 6;
    console.log(nums);
}
// modifyArrayWithLength()

function addElementInBeginArray() {
    const nums = [2, 3, 4, 5];
    console.log(nums);
    const newnum = 1;
    const N = nums.length;
    for (let i = N; i >= 0; --i) {
        nums[i] = nums[i - 1];
    }
    nums[0] = newnum;
    console.log(nums);
}
// addElementInStartArray()

function addElementInBeginArrayWithUnshift() {
    let nums = [2, 3, 4, 5];
    console.log(nums);
    const newnum = 1;
    nums.unshift(newnum);
    console.log(nums);
    nums = [3, 4, 5];
    nums.unshift(newnum, 1, 2);
    console.log(nums);
}
// addElementInBeginArrayWithShift()

function removingElement() {
    const nums = [1, 2, 3, 4, 5, 9];
    nums.pop();
    console.log(nums);
}
// removingElement()

function removingElementInBeginArray() {
    const nums = [9, 1, 2, 3, 4, 5];
    console.log(nums);
    for (let i = 0; i < nums.length; ++i) {
        nums[i] = nums[i + 1];
    }
    console.log(nums);
}
// removingElementInBeginArray()

function removingElementInBeginArrayWithShift() {
    const nums = [9, 1, 2, 3, 4, 5];
    nums.shift();
    console.log(nums);
}
// removingElementInBeginArrayWithShift()

function addElementsInArray() {
    const nums = [1, 2, 3, 7, 8, 9];
    const newElements = [4, 5, 6];
    nums.splice(3, 0, ...newElements);
    console.log(nums);

    // const nums = [1, 2, 3, 7, 8, 9];
    // nums.splice(3, 0, 4, 5, 6);
    // console.log(nums);
}
// addElementsInArray()

function removingElementsWithSplice() {
    const nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
    nums.splice(3, 4);
    console.log(nums);
}
// removingElementsWithSplice()

function reverseArrays() {
    const nums = [1, 2, 3, 4, 5];
    nums.reverse();
    console.log(nums);
}
// reverseArrays()

function sortElements() {
    const names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
    names.sort();
    console.log(names);

    let nums = [3, 1, 2, 100, 4, 200];
    nums.sort();
    console.log(nums);
}
// sortElements()

function sortElementsNumbers() {
    function compare(num1, num2) {
        return num1 - num2;
    }

    const nums = [3, 1, 2, 100, 4, 200];
    nums.sort(compare);
    console.log(nums);
}
// sortElementsNumbers()


module.exports = {
    creatingArraysFromExistingArraysWithIndexOf,
    createArraysFromExistingArraysWithSplice,
    modifyArrays,
    modifyArrayWithLength,
    addElementInBeginArray,
    addElementInBeginArrayWithUnshift,
    removingElement,
    removingElementInBeginArray,
    removingElementInBeginArrayWithShift,
    addElementsInArray,
    removingElementsWithSplice,
    reverseArrays,
    sortElements,
    sortElementsNumbers
};