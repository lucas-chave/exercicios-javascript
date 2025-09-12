const { isEven, verifyEveryNumbers } = require('./chap2_6');

describe("evenNumbers.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("isEven deve identificar números pares corretamente", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(-5)).toBe(false);
  });

  test("verifyEveryNumbers deve identificar que nem todos os números são pares", () => {
    const nums = [2, 4, 6, 7, 8, 10];
    const result = verifyEveryNumbers(nums);
    expect(consoleSpy).toHaveBeenCalledWith("some numbers are odd");
    expect(result).toBe('some numbers are odd')
  });

  test("verifyEveryNumbers deve detectar quando todos forem pares (versão modificada)", () => {
    const nums = [2, 4, 6, 8, 10];
    const result = verifyEveryNumbers(nums);
    expect(consoleSpy).toHaveBeenCalledWith("all numbers are even");
    expect(result).toBe('all numbers are even');
  });
});
