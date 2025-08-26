const { Point, displayPts, runPoints } = require('./chap2_13');

describe("points.js", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("Point deve criar objeto com x e y corretos", () => {
    const p = new Point(10, -5);
    expect(p.x).toBe(10);
    expect(p.y).toBe(-5);
  });

  test("displayPts imprime corretamente pontos de um array", () => {
    const points = [new Point(1, 2), new Point(3, 4)];
    displayPts(points);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "1, 2");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "3, 4");
  });

  test("runPoints deve executar todas operações e exibir corretamente", () => {
    runPoints();

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Point 1: 1, 2");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Point 2: 3, 5");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Point 3: 2, 8");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "Point 4: 4, 4");

    expect(consoleSpy).toHaveBeenNthCalledWith(5, "1, 2");
    expect(consoleSpy).toHaveBeenNthCalledWith(6, "3, 5");
    expect(consoleSpy).toHaveBeenNthCalledWith(7, "2, 8");
    expect(consoleSpy).toHaveBeenNthCalledWith(8, "4, 4");
    expect(consoleSpy).toHaveBeenNthCalledWith(9, "12, -3");
    expect(consoleSpy).toHaveBeenNthCalledWith(10, "3, 5");
    expect(consoleSpy).toHaveBeenNthCalledWith(11, "2, 8");
    expect(consoleSpy).toHaveBeenNthCalledWith(12, "4, 4");
    expect(consoleSpy).toHaveBeenNthCalledWith(13, "12, -3");
  });
});
