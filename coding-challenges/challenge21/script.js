function inWords(digits) {
    let literals = digits.toString()
    wordsList = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    let words = ""
    for (let index = 0; index < literals.length; index++) {
        const digit = literals[index]
        words += wordsList[digit] + " "
    }
    return words
}
console.log(inWords(109))