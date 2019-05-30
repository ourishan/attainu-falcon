function hammingDistance(str1, str2) {       
    if (str1.length==str2.length) {
        let hd = 0
        for (let index = 0; index < str1.length; index++) {
            if (str1[index] != str2[index]) {
                hd++
            }            
        }
        return hd
    } else {
        return 'Strings of different lengths.'
    }
}

console.log(hammingDistance('ishan','ishan'))