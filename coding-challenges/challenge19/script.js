function fib(iteration) {
    while (iteration !== 2) {
        return [...fib(iteration-1),fib(iteration-1)[fib(iteration-1).length-1]+fib(iteration-1)[fib(iteration-1).length-2]]
    }
    return [1,1]
}
console.log(fib(5))