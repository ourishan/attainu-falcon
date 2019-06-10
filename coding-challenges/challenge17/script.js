function fact(num, res = 1) {
    while(num) {
        res = res*num
        return fact(num-1, res)
    }
    return res
}
console.log(fact(4))