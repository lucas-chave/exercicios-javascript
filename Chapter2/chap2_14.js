function calcAverage(data) {
   if (data.length === 0) return 0;
   let total = 0;
   for (let i = 0; i < data.length; ++i) {
      total += data[i];
   }
   return total / data.length;
}

function WeekTemps(storage = []) {
   this.dataStore = storage;

   this.add = function (temp) {
      this.dataStore.push(temp);
   };
   // console.log(this.dataStore, '-----');

   this.average = calcAverage(this.dataStore)

}

function runWeekTemps(temps, logger) {
   const thisWeek = new WeekTemps(temps);

   temps.forEach(t => thisWeek.add(t));

   logger(thisWeek.average);
   return thisWeek;
}

const logger = console.log;
runWeekTemps([52, 55, 61, 65, 55, 50, 52, 49], logger);

module.exports = { WeekTemps, runWeekTemps };
