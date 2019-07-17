function inWords(digits) {
    digits = digits.toString()
    wordsList = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    let words = ""
    for (digit of digits) {
        words += wordsList[digit] + " "
    }
    return words
}
console.log(inWords(109))