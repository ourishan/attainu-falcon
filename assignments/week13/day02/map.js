let numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48]
let squaresOfEven = arr => arr.filter(item=>!(item%2)).map(item=>item**2)
console.log(squaresOfEven(numbers))