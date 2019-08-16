function paramsObj(url) {
    var kstart, kend
    var vstart, vend
    var parseKeys = false
    var parseValues = false
    var change = false
    var keys = []
    var vals = []
    var paramsObj = {}
    for (var i = 0; i < url.length; i++) {
        var curr = url.charAt(i)
        if ((isNaN(curr) && change)|| parseKeys == true ) {
            if (parseKeys != true) {
                parseKeys = true
                kstart = i
            }
            if (!isNaN(curr)) {
                kend = i
                keys.push(url.substring(kstart, kend))
                parseKeys = false
            }
        }

        if (!isNaN(curr) || parseValues == true) {
            if (parseValues != true) {
                parseValues = true
                vstart = i
            }
            if (isNaN(curr)) {
                vend = i
                vals.push(url.substring(vstart, vend))
                parseValues = false
            } else if (i == url.length - 1) {
                vend = i + 1
                vals.push(url.substring(vstart, vend))
                parseValues = false
            }
        }
    } // loop

    for (let i = 0; i < keys.length; i++) {
        paramsObj[keys[i]] = vals[i]
    }

    return paramsObj
}
console.log(paramsObj("Fe2H3OH"))
