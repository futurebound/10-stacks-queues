'use strict';

const Node = require('./node');

//LIFO LAST NODE OR PUSHED THING IN, FIRST THING OUT
module.exports = class {  //exporting anonymous class, like anonymous function and also like the node.js module
  constructor(maxSize = 1048) { //construts with a max-size constraint of 1048
    this.top = null; //sets this stacks top to null
    this.maxSize = maxSize; //sets this stacks maxSize to the given maxSize, static in the constructor
    this.size = 0; //sets size of stack to 0, to increment/decrement as needed
  }

  push(val) { //push method only method that takes a value here
    if(this.size === this.maxSize) throw new Error('Stack overflow!'); //if the size of stack is equal to maxsize, throw error

    let node = new Node(val); //creates new node instance with value passed from .push method

    node.next = this.top; //sets the new node instances .next to the top of the stack, or basically it's next becomes everything currently in the stack
    this.top = node; //top reset to the new node instance 
    this.size++; //increments size
    return this.top; //returns stack
  }

  pop() { //removes something from the top of the stack
    if(this.size === 0) throw new Error('Nothing in stack to remove!');

    let temp = this.top; //creates temporary reference to stack, so we can modify where things point to
   
    this.top = temp.next; //top reassigned value of the temp/stack next (its old next, essentially removing whatever is on top)
    temp.next = null; //sets value of temp.next to null so it can be used again for next pop
    this.size--; //decrements size of stack

    return temp; //returns temp, which is whatever was on top of stack with a next of null
  }

  peek() {
    return this.top; //just looks at the entirety of the stack by returnin the top
  }
};