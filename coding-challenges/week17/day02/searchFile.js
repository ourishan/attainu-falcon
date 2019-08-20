var fs = require('fs')
var readline = require('readline')

async function searchFile(file, name) {
    let ln = 1
    let flag = 0
    let found

    const rl = readline.createInterface({
        input: fs.createReadStream(__dirname + '/' + file),
        crlfDelay: Infinity
    })
    
    for await (const line of rl) {
        if (line.toLowerCase().indexOf(name.toLowerCase()) != -1) {
            flag = 1
            found = ln + ': ' + line
        }
        ln++
    }
    if (flag)
        return found
    else
        return "Not found!"
}

(async() => console.log(await searchFile('names.txt', 'Ansal')))()