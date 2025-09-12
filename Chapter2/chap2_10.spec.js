const { gradesArray, matrix, matrixNames } = require('./chap2_10');

describe("gradesMatrix.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("gradesArray deve calcular médias corretas", () => {
    const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];

    const result = gradesArray(grades);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Student 1 average: 81.33");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Student 2 average: 79.67");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Student 3 average: 91.33");
    expect(result).toStrictEqual({ total: 0, average: 0 })
  });

  test("matrix deve criar matriz com valores iniciais corretos", () => {
    const result = matrix(2, 3, 7);
    expect(result).toEqual([
      [7, 7, 7],
      [7, 7, 7]
    ]);
  });

  test("matrixNames deve manipular corretamente a matriz de nomes", () => {
    const names = matrix(3, 3, "");
    matrixNames(1, 2, 'Joe', names);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Joe");
  });
});
