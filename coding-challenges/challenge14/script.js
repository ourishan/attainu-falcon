function toHours(dur) {
    if(dur<60) {
        return 0+':'+dur
    }
    let sec = dur%60
    let min  = Math.floor(dur/60)%60
    let hrs  = Math.floor(dur/3600)   
    return hrs+':'+min+':'+sec
}
console.log(toHours(3920))