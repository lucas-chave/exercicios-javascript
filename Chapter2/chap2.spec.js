const { calcNotes, reverseWords, weekTemps, lettersInWords } = require('./chap2');

describe("arraysExercises - CalcNotes", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  // #1
  test("deve calcular médias corretamente com nota adicionada", () => {
    const notes = [[9, 4, 3], [2, 4, 10], [1, 9, 2], [7, 8]]

    calcNotes(notes);

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Student 1 average: 5.33");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Student 2 average: 5.50");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Student 3 average: 4.00");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "Student 4 average: 7.50");
  });
});

describe("arraysExercises - reverseWords", () => {
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  // #2
  test("reverseWords deve inverter array de palavras", () => {
    const words = ['developer', 'javascript', 'arrays', 'reverse'];

    const reversed = reverseWords(words);
    expect(reversed).toEqual(['reverse', 'arrays', 'javascript', 'developer']);
  });

})

describe("arraysExercises - weekTemps", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  // #3
  test("weekTemps deve adicionar e calcular médias corretamente", () => {
    const month = new weekTemps();
    month.add(0, 52);
    month.add(0, 55);
    month.add(1, 60);
    month.add(1, 70);

    expect(month.dataStore[0]).toEqual([52, 55]);
    expect(month.dataStore[1]).toEqual([60, 70]);

    expect(month.weekAverage(0)).toBeCloseTo((52 + 55) / 2);
    expect(month.weekAverage(1)).toBeCloseTo((60 + 70) / 2);
    expect(month.monthAverage()).toBeCloseTo((52 + 55 + 60 + 70) / 4);
  });

  test("weekTemps semana inválida retorna mensagem correta", () => {
    const month = new weekTemps();
    month.add(10, 50);
    expect(consoleSpy).toHaveBeenCalledWith("Semana inválida.");
  });

});

describe("arraysExercises - lettersInWords", () => {

  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  // #4
  test("lettersInWords deve criar palavra corretamente", () => {
    const word = lettersInWords();
    expect(word).toBe("javascript");
  });
});
