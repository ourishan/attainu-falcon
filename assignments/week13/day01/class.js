class MyArray {
    constructor(arr) {
        this.array = arr
    }
    print() { console.log(this.array) }
    search(item) { return this.array.indexOf(item) }
    sort(){ return this.array.sort((n, p) => n - p)}
}

let myarray = new MyArray([12,2])

myarray.print()
console.log(myarray.search(21))
console.log(myarray.sort())
