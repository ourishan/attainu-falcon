function pattern(height) {
    let line = ''
    for (let floor = height - 1; floor >= 0; floor--) {
        for (let i = 0; i < floor; i++) {
            line += ' '
        }
        for (let i = 0; i < 2 * (height - floor); i++) {
            i % 2 ? line += ' ' : line += '*'
        }
        line += '\n'
    }
    return line
}
console.log(pattern(5))
