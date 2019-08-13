var a = [[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3],
[4, 4, 4, 4]];

var b = [[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3],
[4, 4, 4, 4]];
let addMatrix = (a, b) => Array.isArray(a) ? a.map((o, i) => addMatrix(a[i], b[i])) : a + b
console.log(addMatrix(a, b))