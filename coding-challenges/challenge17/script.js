function fact(num) {
    while (num) {
        return num*fact(num - 1)
    }
    return 1
}
console.log(fact(4))