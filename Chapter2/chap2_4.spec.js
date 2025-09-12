const chapter2_4 = require('./chap2_4');

let consoleSpy;

describe("creatingArraysFromExistingArraysWithIndexOf", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("concatena corretamente", () => {
    const cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
    const dmp = ["Raymond", "Cynthia", "Bryan"]
    const result = chapter2_4.creatingArraysFromExistingArraysWithIndexOf(cis, dmp);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, [
      "Mike", "Clayton", "Terrill", "Danny", "Jennifer",
      "Raymond", "Cynthia", "Bryan"
    ]);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, [
      "Raymond", "Cynthia", "Bryan",
      "Mike", "Clayton", "Terrill", "Danny", "Jennifer"
    ]);
    expect(result).toEqual([
      "Raymond", "Cynthia", "Bryan",
      "Mike", "Clayton", "Terrill", "Danny", "Jennifer"
    ]);
  });
});

describe("createArraysFromExistingArraysWithSplice", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("divide arrays corretamente", () => {
    const arrayNames = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"]
    const result = chapter2_4.createArraysFromExistingArraysWithSplice(arrayNames);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, ["Raymond", "Cynthia", "Danny"]);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, ["Mike", "Clayton", "Terrill", "Jennifer"]);
    expect(result).toEqual({
      dmpDept: ["Raymond", "Cynthia", "Danny"],
      cisDept: ["Mike", "Clayton", "Terrill", "Jennifer"]
    });
  });
});

describe("modifyArrays", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("adiciona elemento com push", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = chapter2_4.modifyArrays(nums);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("modifyArrayWithLength", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("adiciona elemento com length", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = chapter2_4.modifyArrayWithLength(nums);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("addElementInBeginArray", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("adiciona elemento no início manualmente", () => {
    const nums = [2, 3, 4, 5];
    const result = chapter2_4.addElementInBeginArray(nums);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("addElementInBeginArrayWithUnshift", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("adiciona elementos com unshift", () => {
    const nums = [2, 3, 4, 5];
    const result = chapter2_4.addElementInBeginArrayWithUnshift(nums);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5]);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, [1, 1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 1, 2, 3, 4, 5]);
  });
});

describe("removingElement", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("remove último elemento", () => {
    const nums = [1, 2, 3, 4, 5, 9];
    const result = chapter2_4.removingElement(nums);
    expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("removingElementInBeginArray", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("remove primeiro elemento manualmente", () => {
    const nums = [9, 1, 2, 3, 4, 5];
    const result = chapter2_4.removingElementInBeginArray(nums);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, [1, 2, 3, 4, 5, undefined]);
    expect(result).toEqual([1, 2, 3, 4, 5, undefined]);
  });
});

describe("removingElementInBeginArrayWithShift", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("remove primeiro elemento", () => {
    const nums = [9, 1, 2, 3, 4, 5];
    const result = chapter2_4.removingElementInBeginArrayWithShift(nums);
    expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("addElementsInArray", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("insere elementos com splice", () => {
    const nums = [1, 2, 3, 7, 8, 9];
    const newElements = [4, 5, 6];
    const result = chapter2_4.addElementsInArray(nums, newElements);
    expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("removingElementsWithSplice", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("remove elementos corretos", () => {
    const nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
    const result = chapter2_4.removingElementsWithSplice(nums);
    expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("reverseArrays", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("inverte array", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = chapter2_4.reverseArrays(nums);
    expect(consoleSpy).toHaveBeenCalledWith([5, 4, 3, 2, 1]);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("sortElements", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("ordena strings", () => {
    const names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
    const result = chapter2_4.sortElements(names);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, [
      "Bryan", "Clayton", "Cynthia", "David", "Mike", "Raymond"
    ]);
    expect(result).toEqual(["Bryan", "Clayton", "Cynthia", "David", "Mike", "Raymond"],
    );
  });
});

describe("sortElementsNumbers", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("ordena números corretamente", () => {
    const nums = [3, 1, 2, 100, 4, 200];
    const result = chapter2_4.sortElementsNumbers(nums);
    expect(consoleSpy).toHaveBeenCalledWith([1, 2, 3, 4, 100, 200]);
    expect(result).toEqual([1, 2, 3, 4, 100, 200]);
  });
});
