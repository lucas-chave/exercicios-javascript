const funcs = require('./chap2_7');

describe("verifySomeElements", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve detectar arrays com e sem pares", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = funcs.verifySomeElements(nums);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "some numbers are even");
    expect(result).toBe("some numbers are even")
  });
});

describe("sumNumberInArray", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve somar os números de 1 a 10", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = funcs.sumNumberInArray(nums);
    expect(consoleSpy).toHaveBeenCalledWith(55);
    expect(result).toBe(55)
  });
});

describe("concatStrings", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve concatenar palavras na ordem", () => {
    const words = ["the ", "quick ", "brown ", "fox "];
    const result = funcs.concatStrings(words);
    expect(consoleSpy).toHaveBeenCalledWith("the quick brown fox ");
    expect(result).toBe("the quick brown fox ")
  });
});

describe("inverseArray", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve concatenar palavras na ordem inversa", () => {
    const words = ["the ", "quick ", "brown ", "fox "];
    const result = funcs.inverseArray(words);
    expect(consoleSpy).toHaveBeenCalledWith("fox brown quick the ");
    expect(result).toBe("fox brown quick the ");
  });
});

describe("transformArrayWithMap", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve adicionar 5 a cada nota", () => {
    const grades = [77, 65, 81, 92, 83];

    const result = funcs.transformArrayWithMap(grades);
    expect(consoleSpy).toHaveBeenCalledWith([82, 70, 86, 97, 88]);
    expect(result).toStrictEqual([82, 70, 86, 97, 88]);
  });
});

describe("transformStrings", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve gerar acrônimo corretamente", () => {
    const words = ["for", "your", "information"];
    const result = funcs.transformStrings(words);

    expect(consoleSpy).toHaveBeenNthCalledWith(2, "fyi");
    expect(result).toBe('fyi')
  });
});
