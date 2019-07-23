function isPowerOfTwo(num) {
    while (num > 1) num = num / 2
    return num == 1 ? true : false
}
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(9))