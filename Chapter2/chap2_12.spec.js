const { jaggedArrays } = require('./chap2_12');

describe("jaggedArrays.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("jaggedArrays deve calcular médias corretas para cada estudante", () => {
    const grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];

    jaggedArrays(grades);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Student 1 average: 83.00");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Student 2 average: 79.67");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Student 3 average: 93.25");
  });
});
