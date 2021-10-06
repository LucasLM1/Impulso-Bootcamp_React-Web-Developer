let lines = gets().split("\n");
let line = lines.shift().split(' ');

var N = parseFloat(line[0]);
var L = parseFloat(line[1]);

var P = N * L;

print(P)