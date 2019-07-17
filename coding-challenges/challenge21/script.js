function inWords(digits) {
    wordsList = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    let n, q = digits, words = ""
    while(q>9) {
        n = q%10        
        words = wordsList[n] + " " + words   
        q = ~~(q/10)
    }
    words = wordsList[q] + " " + words   
    return words
}
console.log(inWords(1))