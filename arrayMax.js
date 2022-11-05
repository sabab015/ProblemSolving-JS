var marks = [55, 85, 45, 65, 75];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element > max) {
    max = element;
  }
}
console.log("Highest value is ", max);
