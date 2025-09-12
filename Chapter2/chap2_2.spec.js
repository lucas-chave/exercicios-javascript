const { searchNameInArray } = require('./chap2_2');

describe("searchNameInArray", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve encontrar Cynthia no array", () => {
    const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
    const name = 'Cynthia';

    searchNameInArray(names, name);
    expect(consoleSpy).toHaveBeenCalledWith("Found Cynthia at position 1");
  });

  test("deve imprimir 'not found' se alterarmos o array", () => {
    const names = ["David", "Raymond", "Clayton", "Jennifer"];
    const name = "Cynthia";

    searchNameInArray(names, name);
    expect(consoleSpy).toHaveBeenCalledWith("Cynthia not found in array.");
  });
});
