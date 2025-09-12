// Usando o concat
function creatingArraysFromExistingArraysWithIndexOf(cis, dmp) {
    let it = cis.concat(dmp)
    console.log(it)
    it = dmp.concat(cis)
    console.log(it)
    return it
}
// creatingArraysFromExistingArrays()

// Usando o splice
const itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"]

function createArraysFromExistingArraysWithSplice(itDiv) {
    const dmpDept = itDiv.splice(3, 3)
    const cisDept = itDiv
    console.log(dmpDept)
    console.log(cisDept)
    return { dmpDept, cisDept }
}
// createArraysFromExistingArraysWithSplice(itDiv)

// Modificando um array
const nums = [1, 2, 3, 4, 5];

function modifyArrays(nums) {
    console.log(nums);
    nums.push(6);
    console.log(nums);
    return nums
}
// modifyArrays(nums)

function modifyArrayWithLength(nums) {
    console.log(nums);
    nums[nums.length] = 6;
    console.log(nums);
    return nums
}
// modifyArrayWithLength(nums)

function addElementInBeginArray(nums) {
    console.log(nums);
    const newnum = 1;
    const N = nums.length;
    for (let i = N; i >= 0; --i) {
        nums[i] = nums[i - 1];
    }
    nums[0] = newnum;
    console.log(nums);
    return nums
}
// addElementInStartArray()

function addElementInBeginArrayWithUnshift(nums) {
    console.log(nums);
    const newnum = 1;
    nums.unshift(newnum);
    console.log(nums);
    nums = [3, 4, 5];
    nums.unshift(newnum, 1, 2);
    console.log(nums);
    return nums
}
// addElementInBeginArrayWithShift()

function removingElement(nums) {
    nums.pop();
    console.log(nums);
    return nums
}
// removingElement()

function removingElementInBeginArray(nums) {
    console.log(nums);
    for (let i = 0; i < nums.length; ++i) {
        nums[i] = nums[i + 1];
    }
    console.log(nums);
    return nums
}
// removingElementInBeginArray()

function removingElementInBeginArrayWithShift(nums) {
    nums.shift();
    console.log(nums);
    return nums
}
// removingElementInBeginArrayWithShift()

function addElementsInArray(nums, newElements) {
    nums.splice(3, 0, ...newElements);
    console.log(nums);

    // const nums = [1, 2, 3, 7, 8, 9];
    // nums.splice(3, 0, 4, 5, 6);
    // console.log(nums);
    return nums
}
// addElementsInArray()

function removingElementsWithSplice(nums) {
    nums.splice(3, 4);
    console.log(nums);
    return nums
}
// removingElementsWithSplice()

function reverseArrays(nums) {
    nums.reverse();
    console.log(nums);
    return nums
}
// reverseArrays()

function sortElements(names) {
    names.sort();
    console.log(names);
    return names;
}
// sortElements()

function sortElementsNumbers(nums) {
    function compare(num1, num2) {
        return num1 - num2;
    }

    nums.sort(compare);
    console.log(nums);
    return nums
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
