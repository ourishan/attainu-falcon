function fib(iteration) {
    while (iteration !== 2) {
        let r = fib(iteration-1)
        r.push(r[r.length-1]+r[r.length-2])
        return r
    }
    return [1,1]
}
console.log(fib(5))