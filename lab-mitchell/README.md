# Lab 10 ~ Stacks and Queues Data Structures

**Author**: Mitchell
**Version**: 1.0.0

## Overview
We were tasked to utilize the concepts of Stacks and Queues data structures, implementing constructors for both. The Stack constructor needed to include `push(value)`, `pop()`, and `peek()` methods on the Stack prototype. The Queue constrcutor needed to include `enqueue(value)`, and `dequeue()` methods on the Queue prototype.

## Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

## Description
There are two main files, one for each data structure constructor as follows:

**Stack**
The Stack module is accessed by other parts of the application by entering `const Stack = require('../lib/stack)`. The class has three methods available to it, `push(value)`, `pop()`, and `peek()`. It has `top`, `maxSize`, and `size` properties once constructed.

* `push(value)` expects a single argument, which can be any value one wants to store. It will return the entirety of the stack upon completion. It will throw an error if the maximum size of the stack would be exceeded by adding another node to the stack.

* `pop()` doesn't expect any arguments, and returns the item removed from the top of the stack upon completion. It  will throw an error if there is nothing in the stack to remove.

* `peek()` doesn't expect any arguments either, and returns the entirety of the stack, beginning with the first item in the stack.

**Queue**
The Queue module is accessed by other parts of the application by entering `const Queue = require('../lib/queue)`. The class has two methods available to it, `enqueue(value)` and `dequeue()`. It has two different pointers, as opposed to the Stack class which only points to the top, which are the `front` and `back` properties once constructed. It has `maxSize` and `size` properties as well. 

* `enqueue(value)` expects a single argument, and assigns it to the value of the newly created node that is entered into the queue. It returns the entire queue upon completion. New nodes are enqueue'd to the end/back of the queue (i.e. last in line). If the `maxSize` would be exceeded by the addition, it throws an error explaining this.

* `dequeue()` expects no arguments and removes the node at the front of the queue, returning the removed node as the output of the function. If there is nothing in the queue, it will throw an error explalining this.

## Credits and Collaborations
[Jest Docs](https://facebook.github.io/jest/) ~ https://facebook.github.io/jest/

