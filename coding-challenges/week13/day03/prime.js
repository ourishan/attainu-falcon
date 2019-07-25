function isPrime(num) {
    if (num == 1) {
        return false
    } else if (num == 2) {
        return true
    } else {
        for (let x = 2; x < num; x++) {
            if (num % x == 0) {
                return false
            }
        }
        return true
    }
}

function nPrime(count) {
    let i = 0
    let primes = []
    while (count) {
        i++
        if (isPrime(i)) {
            count--
            primes.push(i)
        }
    }
    return primes
}

console.log(isPrime(3));
console.log(nPrime(5));