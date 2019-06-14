function pangram(str) {
    let miss = ''
    for(let i = "a".charCodeAt();i <= "z".charCodeAt(); i++ ) {
        if (str.toLowerCase().indexOf(String.fromCharCode(i)) == -1) {
            miss += String.fromCharCode(i)
        }
    }
    return miss
}
console.log(pangram('The quick brown fox jumps'))