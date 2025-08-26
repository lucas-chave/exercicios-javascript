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
    verifyEveryNumbers();
    expect(consoleSpy).toHaveBeenCalledWith("some numbers are odd");
  });

  test("verifyEveryNumbers deve detectar quando todos forem pares (versão modificada)", () => {
    const allEven = () => {
      const nums = [2, 4, 6, 8, 10];
      const even = nums.every(isEven);
      if (even) {
        console.log("all numbers are even");
      } else {
        console.log("some numbers are odd");
      }
    };

    allEven();
    expect(consoleSpy).toHaveBeenCalledWith("all numbers are even");
  });
});
