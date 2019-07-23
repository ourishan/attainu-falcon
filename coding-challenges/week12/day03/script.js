function inWords(digits) {
    wordsList = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    var words = "",n
    do {
        n = digits%10        
        words = wordsList[n] + " " + words
        digits = ~~(digits/10)
    } while(digits>9)   
    return words
}
console.log(inWords(12))