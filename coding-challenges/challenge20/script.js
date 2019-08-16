function pangram(str) {
    let miss = ''
    for(let i = "a".charCodeAt();i <= "z".charCodeAt(); i++ ) {
        let char = String.fromCharCode(i)
        if (str.toLowerCase().indexOf(char) == -1) {
            miss += char
        }
    }
    return miss
}
console.log(pangram('The quick brown fox jumps'))