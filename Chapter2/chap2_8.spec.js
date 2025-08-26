const { isEven, isOdd, runFilter } = require('./chap2_8');

describe("filterNumbers.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("isEven deve identificar números pares", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
  });

  test("isOdd deve identificar números ímpares", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(-3)).toBe(true);
  });

  test("runFilter deve imprimir pares e ímpares corretamente", () => {
    runFilter();

    const expectedEvens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    const expectedOdds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Even numbers: ");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, expectedEvens);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Odd numbers: ");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, expectedOdds);
  });
});
