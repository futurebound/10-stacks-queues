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

    //keep this, but refactor
    if(!this.back) { //if nothing in node
      this.front = this.back = node; //assign node to the back, and take that value and pass it to the front as well
      this.size++;
      return this;
    }

    //now assume there something in queue
    this.back.next = node; //value of this.back assigned to node.next
    this.back = node; //value of newly instantiated node
    this.size++; //increment queue size
    return this; //return queue

    // ternary version, which removes need for if block and 
    // this.back ? this.back.next = node : this.front = node;
    // this.back = node;
    // return this;
  }

  dequeue() {
    if(!this.front && !this.back) throw new Error('Nothing in queue to dequeue'); //queue empty edge case
    if(this.front === this.back) { //only 1 thing in queue edge case, so that back isn't still linked to what we are dequeueing
      let temp = this.front; //value of front assinged to temp
      this.front = this.back = null; //null assigned to back
      this.size--; //decrements size of queue
      return temp; //returns what's being dequeue'd
    }

    let temp = this.front; //creates temp reference to front of queue
   
    this.front = this.front.next; //sets front of queue to the next of the queue

    //can also just do following, since this.front.next being null means that this.front from the reassignment has no front, and thus should have no back, meaning that line 50 would take care of the edge case of there only being 1 item in queue when dequeueing which is taken care of in lines 39-43 above
    // if(!this.front) this.back = null; 

    temp.next = this.front.next; //sets next of temp (front item being dequeued) to null
    temp.next = null; //resets/unlinks temp from queue
    this.size--; //decrements size of queue

    return temp; //returns the front of queue which has now been removed from queue, with its value and a next of null
  }
};