const { square, createArray, runSquares } = require('./chap2_5');

describe("squareArray.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("createArray deve retornar array de 1 a 10", () => {
    const nums = createArray();
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("square deve imprimir número e seu quadrado", () => {
    square(3);
    expect(consoleSpy).toHaveBeenCalledWith(3, 9);
  });

  test("runSquares deve chamar square para cada número de 1 a 10", () => {
    runSquares();
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(10, 10, 100);
  });
});
