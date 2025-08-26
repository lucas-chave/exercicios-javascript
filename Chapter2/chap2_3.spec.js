const { searchNameInArrayWithPosition, stringsOfArrays } = require('./chap2_3');

describe("searchNameInArrayWithPosition", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve mostrar a primeira e última posição de 'Mike'", () => {
    searchNameInArrayWithPosition();
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "First found Mike at position 1");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Last found Mike at position 5");
  });
});

describe("stringsOfArrays", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("deve exibir a string dos nomes corretamente", () => {
    stringsOfArrays();
    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      "David,Cynthia,Raymond,Clayton,Mike,Jennifer"
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      "David,Cynthia,Raymond,Clayton,Mike,Jennifer"
    );
  });
});
