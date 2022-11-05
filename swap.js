var a = 5;
var b = 7;
console.log("Before swap, a = ",a, "b = ", b);

var temp;
temp = a;
a = b;
b = temp;
console.log("After swap, a = ",a, "b = ", b);


var x = 5;
var y = 7;
console.log("Before swap, x = ",x, "y = ", y);
[x,y] = [y,x]
console.log("After swap, x = ",x, "y = ", y);