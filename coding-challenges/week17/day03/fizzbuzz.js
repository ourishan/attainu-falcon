let fizzbuzz = [...Array(100).keys()].map(num=>num+1).map(num=>num%3||num%5?num%3?num%5?num:'buzz':'fizz':'fizzbuzz')
console.table(fizzbuzz)