const { weekTemps } = require('./chap2_14');

describe("weekTemps", () => {

  test("add deve armazenar temperaturas corretamente", () => {
    const week = new weekTemps();
    week.add(50);
    week.add(60);
    expect(week.dataStore).toEqual([50, 60]);
  });

  test("average deve calcular média corretamente", () => {
    const week = new weekTemps();
    const temps = [52, 55, 61, 65, 55, 50, 52, 49];
    temps.forEach(t => week.add(t));

    const avg = week.average();
    const expectedAvg = temps.reduce((a, b) => a + b, 0) / temps.length;

    expect(avg).toBe(expectedAvg);
  });

});
