const { gradeForLine } = require('./chap2_11');

describe("gradeForLine.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("gradeForLine deve calcular médias corretas por teste (colunas)", () => {
    const grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
    gradeForLine(grades);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Test 1 average: 85.33");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Test 2 average: 84.33");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Test 3 average: 82.67");
  });
});
