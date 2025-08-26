const funcs = require('./chap2_7');

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
});

afterEach(() => {
  consoleSpy.mockRestore();
});

test("verifySomeElements deve detectar arrays com e sem pares", () => {
  funcs.verifySomeElements();
  expect(consoleSpy).toHaveBeenNthCalledWith(1, "some numbers are even");
  expect(consoleSpy).toHaveBeenNthCalledWith(2, "no numbers are even");
});

test("sumNumberInArray deve somar os números de 1 a 10", () => {
  funcs.sumNumberInArray();
  expect(consoleSpy).toHaveBeenCalledWith(55);
});

test("concatStrings deve concatenar palavras na ordem", () => {
  funcs.concatStrings();
  expect(consoleSpy).toHaveBeenCalledWith("the quick brown fox ");
});

test("inverseArray deve concatenar palavras na ordem inversa", () => {
  funcs.inverseArray();
  expect(consoleSpy).toHaveBeenCalledWith("fox brown quick the ");
});

test("transformArrayWithMap deve adicionar 5 a cada nota", () => {
  funcs.transformArrayWithMap();
  expect(consoleSpy).toHaveBeenCalledWith([82, 70, 86, 97, 88]);
});

test("transformStrings deve gerar acrônimo corretamente", () => {
  funcs.transformStrings();
  expect(consoleSpy).toHaveBeenNthCalledWith(1, ["f", "y", "i"]);
  expect(consoleSpy).toHaveBeenNthCalledWith(2, "fyi");
});
