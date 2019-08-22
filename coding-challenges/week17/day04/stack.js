class Stack {
    constructor() {
        this.store = []
    }
    push(item){
        this.store.push(item)
    }
    pop(){
        this.store.pop()
    }
    get(){
        return this.store
    }
}

let stack = new Stack()
stack.push(2)
console.log(stack.get())
stack.push(3)
console.log(stack.get())
stack.pop()
console.log(stack.get())