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

  describe('enqueue method', () => {
    it('should add a node with value of 1 to front of queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.front.val).toEqual(1);
    });
    it('should add a node with value of 2 to back of queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      expect(this.queue.back.val).toEqual(2);
      expect(this.queue.back.next.val).toEqual(1);
    });
  });

  describe('dequeue method', () => {

  });
});