function fact(num, res = 1) {
    res = res*num
    num--
    while(num) {
        return fact(num, res)
    }
    return res
}
console.log(fact(4))