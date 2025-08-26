function Point(x, y) {
   this.x = x;
   this.y = y;
}

function displayPts(arr) {
   for (let i = 0; i < arr.length; ++i) {
      console.log(arr[i].x + ", " + arr[i].y);
   }
}

function runPoints() {
   const p1 = new Point(1, 2);
   const p2 = new Point(3, 5);
   const p3 = new Point(2, 8);
   const p4 = new Point(4, 4);
   const points = [p1, p2, p3, p4];

   for (let i = 0; i < points.length; ++i) {
      console.log(
         "Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y
      );
   }

   const p5 = new Point(12, -3);
   points.push(p5);

   displayPts(points);
   points.shift();
   displayPts(points);
}

module.exports = { Point, displayPts, runPoints };
