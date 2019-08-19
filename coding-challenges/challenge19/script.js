function fib(i) {
    while (i > 2) {
        return [...fib(i-1),fib(i-1)[i-2]+fib(i-1)[i-3]]
    }
    return [0,1]
}
console.log(fib(5))