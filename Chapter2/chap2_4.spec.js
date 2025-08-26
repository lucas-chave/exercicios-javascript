const ops = require('./chap2_4');

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
});

afterEach(() => {
  consoleSpy.mockRestore();
});

test("creatingArraysFromExistingArraysWithIndexOf concatena corretamente", () => {
  ops.creatingArraysFromExistingArraysWithIndexOf();
  expect(consoleSpy).toHaveBeenNthCalledWith(1, [
    "Mike", "Clayton", "Terrill", "Danny", "Jennifer",
    "Raymond", "Cynthia", "Bryan"
  ]);
  expect(consoleSpy).toHaveBeenNthCalledWith(2, [
    "Raymond", "Cynthia", "Bryan",
    "Mike", "Clayton", "Terrill", "Danny", "Jennifer"
  ]);
});

test("createArraysFromExistingArraysWithSplice divide arrays corretamente", () => {
  ops.createArraysFromExistingArraysWithSplice();
  expect(consoleSpy).toHaveBeenNthCalledWith(1, ["Raymond", "Cynthia", "Danny"]);
  expect(consoleSpy).toHaveBeenNthCalledWith(2, ["Mike", "Clayton", "Terrill", "Jennifer"]);
});

test("modifyArrays adiciona elemento com push", () => {
  ops.modifyArrays();
  expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5, 6]);
});

test("modifyArrayWithLength adiciona elemento com length", () => {
  ops.modifyArrayWithLength();
  expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5, 6]);
});

test("addElementInBeginArray adiciona elemento no início manualmente", () => {
  ops.addElementInBeginArray();
  expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5]);
});

test("addElementInBeginArrayWithUnshift adiciona elementos com unshift", () => {
  ops.addElementInBeginArrayWithUnshift();
  expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5]);
  expect(consoleSpy).toHaveBeenNthCalledWith(3, [1, 1, 2, 3, 4, 5]);
});

test("removingElement remove último elemento", () => {
  ops.removingElement();
  expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
});

test("removingElementInBeginArray remove primeiro elemento manualmente", () => {
  ops.removingElementInBeginArray();
  expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5, undefined]);
});

test("removingElementInBeginArrayWithShift remove primeiro elemento", () => {
  ops.removingElementInBeginArrayWithShift();
  expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
});

test("addElementsInArray insere elementos com splice", () => {
  ops.addElementsInArray();
  expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("removingElementsWithSplice remove elementos corretos", () => {
  ops.removingElementsWithSplice();
  expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
});

test("reverseArrays inverte array", () => {
  ops.reverseArrays();
  expect(consoleSpy).toHaveBeenCalledWith([5, 4, 3, 2, 1]);
});

test("sortElements ordena strings e números", () => {
  ops.sortElements();
  expect(consoleSpy).toHaveBeenNthCalledWith(1, [
    "Bryan", "Clayton", "Cynthia", "David", "Mike", "Raymond"
  ]);
  expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 100, 2, 200, 3, 4]);
});

test("sortElementsNumbers ordena números corretamente", () => {
  ops.sortElementsNumbers();
  expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 100, 200]);
});
