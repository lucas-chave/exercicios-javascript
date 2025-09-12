const { WeekTemps, runWeekTemps } = require("./chap2_14");

describe("WeekTemps", () => {
  test("add deve armazenar temperaturas corretamente", () => {
    const week = new WeekTemps();
    week.add(50);
    week.add(60);
    expect(week.dataStore).toEqual([50, 60]);
  });

  test("average deve calcular média corretamente", () => {
    const temps = [52, 55, 61, 65, 55, 50, 52, 49];
    const week = new WeekTemps(temps);
    temps.forEach((t) => week.add(t));

    const avg = week.average;

    expect(avg).toBe(54.875);
    expect(typeof avg).toBe("number");
  });
});

describe("runWeekTemps", () => {
  test("deve adicionar todas as temperaturas e calcular média corretamente", () => {
    const temps = [52, 55, 61, 65];
    const logger = jest.fn();

    const week = runWeekTemps(temps, logger);

    expect(week.dataStore).toEqual(temps);

    const expectedAvg = temps.reduce((a, b) => a + b, 0) / temps.length;
    expect(logger).toHaveBeenCalledWith(expectedAvg);
    expect(week).toBeInstanceOf(WeekTemps);
  });

  test("deve lidar com array vazio", () => {
    const logger = jest.fn();

    const week = runWeekTemps([], logger);

    expect(week.dataStore).toEqual([]);
    expect(logger).toHaveBeenCalledWith(0);

    expect(week.average).toBe(0);
  });
});
