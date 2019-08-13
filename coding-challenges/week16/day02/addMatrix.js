var a = [[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3],
[4, 4, 4, 4]];

var b = [[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3],
[4, 4, 4, 4]];
let addMatrix = (a, b) => a.map((o, i) => Array.isArray(o) ? addMatrix(a[i], b[i]) : a[i] + b[i])
console.log(addMatrix(a, b))