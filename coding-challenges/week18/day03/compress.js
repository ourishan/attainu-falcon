let compress = str => {
    let arr = []
    let strArr = [...str]
    strArr.forEach(element => arr[element] = arr[element] ? arr[element] + 1 : 1)
    let out = ''
    for (const key in arr) {
        arr[key] == 1 ? out += key : out += key + arr[key]
    }
    return out
}
console.log(compress("AAAAAABBBBBBDDDDD"))
while (true) {

}