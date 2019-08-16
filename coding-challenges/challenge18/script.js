function decToBin(dec) {
    let bin = 0,
        div = dec,
        unit = 1,rem
    while (div > 1) {
        rem = (div % 2)
        div = (div - rem) / 2
        bin = bin + rem * unit
        unit = unit * 10
    }
    bin = div * unit + bin
    return bin
}
console.log(decToBin(777))