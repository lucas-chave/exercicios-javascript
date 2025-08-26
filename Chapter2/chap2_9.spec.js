const { passing, generateGrades } = require('./chap2_9');

describe("grades.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("passing deve retornar true para notas >= 60", () => {
    expect(passing(60)).toBe(true);
    expect(passing(100)).toBe(true);
    expect(passing(59)).toBe(false);
    expect(passing(0)).toBe(false);
  });

  test("generateGrades deve gerar 20 notas e filtrar aprovados", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.75);
    const { grades, passGrades } = generateGrades();

    expect(grades.length).toBe(20);
    expect(grades.every(g => g === 75)).toBe(true);
    expect(passGrades.length).toBe(20);
    expect(passGrades.every(g => g >= 60)).toBe(true);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, grades);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, passGrades);

    Math.random.mockRestore();
  });
});
