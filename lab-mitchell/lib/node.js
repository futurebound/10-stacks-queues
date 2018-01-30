'use strict';

module.exports = class { //exports 'anonymous class', effectively same thing as anonymous function export
  constructor(val) { //constructor that takes single value
    if (!val) return new Error('Value must be passed as argument'); //if no value, returns error to alert
    this.val = val; //this nodes value is the passed value
    this.next = null; //this nodes next is null
  }
};