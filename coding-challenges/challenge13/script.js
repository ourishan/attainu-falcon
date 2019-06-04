function palin(str) {
    for (let i = 0; i <= (str.length / 2) - 1; i++) {
        if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) {
            console.log("not a pallindrome")
            return false
        }
    }
    console.log("pallindrome!")
    return true
}
palin("kayak")