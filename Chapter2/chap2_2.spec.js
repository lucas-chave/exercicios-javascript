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
    searchNameInArray();
    expect(consoleSpy).toHaveBeenCalledWith("Found Cynthia at position 1");
  });

  test("deve imprimir 'not found' se alterarmos o array", () => {
    const searchWithoutCynthia = () => {
      const names = ["David", "Raymond", "Clayton", "Jennifer"];
      const name = "Cynthia";
      const position = names.indexOf(name);
      if (position >= 0) {
        console.log("Found " + name + " at position " + position);
      } else {
        console.log(name + " not found in array.");
      }
    };

    searchWithoutCynthia();
    expect(consoleSpy).toHaveBeenCalledWith("Cynthia not found in array.");
  });
});
