let upChar = str =>str.toLowerCase().replace(/[a-z]/g,l=>l=='z'?'a':String.fromCharCode(l.charCodeAt()+1))
console.log(upChar("Ianz"))