function sort(arr1, arr2) {
    let outArr = []
    while (arr1.length && arr2.length) {
        let min
        if (arr1[0] < arr2[0]) {
            min = arr1.shift()
        } else {
            min = arr2.shift()
        }
        outArr.push(min)
    }
    if (arr1.length) {
        outArr = outArr.concat(arr1)
    }
    if (arr2.length) {
        outArr = outArr.concat(arr2)
    }
    return outArr
}
let arr1 = [4, 5, 6],
    arr2 = [1, 2, 3]

console.log(sort(arr1, arr2))