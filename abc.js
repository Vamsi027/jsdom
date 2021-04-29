// class Stack
// {
//     constructor(maxsize)
//     {
//         this.maxsize=maxsize
//         this.arr=[]
//     }
//     push(x)
//     {
//         if(this.isFull())
//         console.log('Stack is full')
//         else
//         this.arr.push(x) 
//     }
//     pop()
//     {
//         if(this.isEmpty())
//         console.log('Impossible') 
//         else
//         this.arr.pop(this.arr.length-1)
         
//     }
//     top()
//     {
//         console.log(this.arr[this.arr.length-1])
//     }
//     isFull()
//     {
//         return this.arr.length==this.maxsize
//     }
//     isEmpty()
//     {
//         return this.arr.length==0
//     }
//     print()
//     {
//         for(let i of this.arr)
//         console.log(i)
//     }
// }

// let stack=new Stack(6)
// stack.push(5)
// stack.top()
// stack.pop()
// stack.pop()
// stack.push(6)
// stack.push(7)
// stack.push(8)
// stack.pop()
// stack.top()
// stack.push(8)
// stack.push(8)
// stack.push(8)
// stack.push(8)
// stack.push(8)
// stack.print()
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        return this.items.push(element);
    }
    
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    peekLast() {
        return this.items[this.items.length - 1];
    }
    peekFront() {
        return this.items[0];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);
queue.dequeue();
console.log(queue.items);
console.log(queue.peekLast());
console.log(queue.peekFront());
console.log(queue.isEmpty());
console.log(queue.items);