function Point(x, y) {
   this.x = x;
   this.y = y;
}

function displayPts(arr, logger) {
   for (let i = 0; i < arr.length; ++i) {
      logger(arr[i].x + ", " + arr[i].y);
   }
}

function runPoints(points, logger) {
   for (let i = 0; i < points.length; ++i) {
      logger(
         "Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y
      );
   }

   const p5 = new Point(12, -3);
   points.push(p5);

   displayPts(points, logger);
   points.shift();
   displayPts(points, logger);

   return points;
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 5);
const p3 = new Point(2, 8);
const p4 = new Point(4, 4);

const logger = console.log;

runPoints([p1, p2, p3, p4], logger);

module.exports = { Point, displayPts, runPoints };
