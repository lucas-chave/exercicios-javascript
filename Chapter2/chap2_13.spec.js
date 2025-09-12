const { Point, displayPts, runPoints } = require('./chap2_13');

describe("Point", () => {
  test("deve criar objeto com x e y corretos", () => {
    const p = new Point(10, -5);
    expect(p.x).toBe(10);
    expect(p.y).toBe(-5);
  });
});

describe("displayPts", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.fn();
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  test("deve imprimir corretamente pontos de um array", () => {
    const points = [new Point(1, 2), new Point(3, 4)];
    displayPts(points, consoleSpy);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "1, 2");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "3, 4");
  });

  test("deve funcionar com array vazio", () => {
    displayPts([], consoleSpy);
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});

describe("runPoints", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.fn();
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  test("deve executar todas operações e exibir corretamente", () => {
    const p1 = new Point(1, 2);
    const p2 = new Point(3, 5);
    const p3 = new Point(2, 8);
    const p4 = new Point(4, 4);

    const points = [p1, p2, p3, p4];

    const result = runPoints(points, consoleSpy);

    // chamadas do primeiro loop
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Point 1: 1, 2");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Point 2: 3, 5");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Point 3: 2, 8");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "Point 4: 4, 4");

    // chamadas do primeiro displayPts
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "1, 2");
    expect(consoleSpy).toHaveBeenNthCalledWith(6, "3, 5");
    expect(consoleSpy).toHaveBeenNthCalledWith(7, "2, 8");
    expect(consoleSpy).toHaveBeenNthCalledWith(8, "4, 4");
    expect(consoleSpy).toHaveBeenNthCalledWith(9, "12, -3");

    // chamadas do segundo displayPts (após shift)
    expect(consoleSpy).toHaveBeenNthCalledWith(10, "3, 5");
    expect(consoleSpy).toHaveBeenNthCalledWith(11, "2, 8");
    expect(consoleSpy).toHaveBeenNthCalledWith(12, "4, 4");
    expect(consoleSpy).toHaveBeenNthCalledWith(13, "12, -3");

    // verifica retorno da função
    expect(result).toStrictEqual([
      new Point(3, 5),
      new Point(2, 8),
      new Point(4, 4),
      new Point(12, -3),
    ]);
  });
});
