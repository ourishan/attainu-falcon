function wordMap(str) {
    let charlist = []
    charlist[0] = {}
    charlist[0].name = str[0].toLowerCase()
    charlist[0].count = 1
    for (let i = 1; i < str.length; i++) {
        let flag = true
        for (let j = 0; j < charlist.length; j++) {
            if (charlist[j].name.indexOf(str[i].toLowerCase()) != -1) {
                flag = false
                break
            }
        }
        if (flag) {
            let itm = {}
            itm.name = str[i].toLowerCase()
            itm.count = 1
            charlist.push(itm)
        } else {
            for (let j = 0; j < charlist.length; j++) {
                if (charlist[j].name.indexOf(str[i].toLowerCase()) != -1) {
                    charlist[j].count++
                    break
                }
            }
        }
    }
    return charlist
}

function anagram(str1, str2) {
    let wm1 = wordMap(str1)
    let wm2 = wordMap(str2)
    for (const i of wm1) {
        let flag = false
        for (const j of wm2) {
            if(i.name==j.name && i.count==j.count) {
                flag = true
                break
            }            
        }
        if(!flag) {
            return 'Not a Anagram!'
        }
    }
    return 'Anagram!'
}

console.log(anagram('slives','elviss'))