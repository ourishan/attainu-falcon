function palin(str) {
    let rng = str.length % 2 ? (str.length - 1) / 2 : str.length / 2
    for (let i = 0; i < rng; i++) {
        if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) {
            console.log("not a pallindrome")
            return false
        }
    }
    console.log("pallindrome!")
    return true
}
palin("kyak")