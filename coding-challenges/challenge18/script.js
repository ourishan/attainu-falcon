function decToBin(dec) {
    let bin = 0,
        div = dec,
        unit = 1
    while (div !== 1) {
        bin += (div % 2) * unit
        div = Math.floor(div / 2)
        unit = unit * 10
    }
    bin = unit + bin
    return bin
}
console.log(decToBin(67))