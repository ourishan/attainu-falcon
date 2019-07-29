function seriesSum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            sum += j
        }
    }
    return sum
}
console.log(seriesSum(5))
console.log(seriesSum(10))