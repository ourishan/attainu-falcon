function diffSquares(n) {
    let arr = [...Array(n).keys()].map(i => i + 1)
    let sumSquares = arr.map(i => i ** 2).reduce((acc, curr) => acc + curr)
    let squareSum = arr.reduce((acc, curr) => acc + curr) ** 2
    return squareSum - sumSquares
}

console.log(diffSquares(10))
console.log(diffSquares(100))