function palin(str) {
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) {
            console.log("not a pallindrome")
            return false
        }
    }
    console.log("pallindrome!")
    return true
}
palin("kyyayyk")