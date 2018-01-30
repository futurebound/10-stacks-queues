'use strict';

const Queue = require('../lib/queue');
require('jest');

describe('#queue', function(){
  beforeEach(() => this.queue = new Queue());

  describe('default properties', () => {
    it('should create a new instance of Queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have default value of null assigned to front property', () => {
      expect(this.queue.front).toBeNull();
    });
    it('should have default value of null assigned to back property', () => {
      expect(this.queue.back).toBeNull();
    });
    it('should have default value of 0 assigned to size property', () => {
      expect(this.queue.size).toEqual(0);
    });
    it('should have maxSize property of 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
  });

  describe('#enqueue', () => {
    it('should add a node with value of 1 to front of queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.front.val).toEqual(1);
    });
    it('should add a node with value of 2 to back of queue', () => {
      this.queue.enqueue(1).enqueue(2);
      expect(this.queue.front.next).toEqual({val: 2, next: null});
    });
    it('should throw error when max size of queue is met', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      }).toThrow();
    });
  });

  describe('#dequeue', () => {
    it('should return what is being dequeued when only one item in queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.dequeue()).toEqual({val: 1, next: null});
    });
    it('should properly decrement the size of the queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(3);
      this.queue.dequeue();
      expect(this.queue.size).toEqual(2);
    });
    it('should throw an error if nothing in queue', () => {
      expect(() => {
        this.queue.dequeue();
      }).toThrow();
    });
  });
});