'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize = 1048) {
    this.front = null; //sets front of queue to null
    this.back = null; //sets back of queue to null
    this.maxSize = maxSize; //sets maxSize of queue to given maxSize in constructor
    this.size = 0; //sets initial size of queue to 0
  }

  enqueue(val) {
    if(this.size === this.maxSize) throw new Error('Queue overflow!'); //if the size of queue is equal to maxsize, throw error

    let node = new Node(val); //creates new node instance

    if(!this.size) this.front = node; //if there is nothing in queue, new node instance added to front of queue
    if(this.back) this.back.next = node; //if this back is not null, i.e. there's stuff in the queue, the next of the back of the queue is assigned value of new node instance
    this.size++; //increments size of queue

    console.log(this);
    return this; //returns entirety of queue from back to front
  }

  dequeue() {
    let temp = this.front; //creates temp reference to front of queue
   
    this.front = temp.next; //sets front of queue to the next of the queue
    temp.next = null; //sets next of temp (front item being dequeued) to null
    this.size--; //decrements size of queue

    return temp; //returns the front of queue which has now been removed from queue, with its value and a next of null
  }
};