---
layout: post
title:  "ES6... the Rest Parameter and Spread Operator"
date:   2016-04-04 14:00:00
categories:
tags: js es6 spread rest
image:
---
In exploring some newer libraries, such as [Cycle.js](http://cycle.js.org/) (which I will discuss in a future post), I've had to start picking up some ES6 syntax, which I'm happy to report has been nothing but a positive experience for me so far. As a fan of ellipses (the punctuation mark) in general, I'm pleased that in ES6, ellipses have utility in two different ways. The first is in denoting the rest parameter in function declarations, acting essentially as a better version of the `arguments` object.

``` js
function func(firstArg, secondArg, ...restArg) {
  console.log(firstArg + secondArg, restArg);
  return Array.isArray(restArg);
}

func(1, 2, 3, 4, 5); // logs 3, [3, 4, 5], returns true
```

If your last or only parameter is prefixed with `...`, that parameter becomes the name for an array containing all arguments past that point (hence, the "rest" of the parameters). Unlike the `arguments` object, the rest parameter is an actual `Array` instance, meaning no more of that `.apply` business just to `.slice` or use any other array methods on your arguments. And since the rest parameter can be named just like any other parameter, it allows for more flexibility in namespacing.

Speaking of `.apply`, the second use of ellipses is as the spread operator. An inverse of the rest parameter, the spread operator is used to expand an iterable object, an array for instance, into its constituent elements for use as arguments to a function invocation or construction of an array literal. It's a succinct syntactic alternative to `.apply` (provided you don't need to set a particular `this` value).

``` js
// Use spread instead of apply to find the greatest value in an array
var randomNumArray = [1, -3, 6, 4, 11, 3, -8];
Math.max(...randomNumArray); // 11

// Use spread to construct an array using elements of another array
var nucleus = ['protons', 'neutrons'];
var atom = [...nucleus, 'electrons']; // ['protons', 'neutrons', 'electrons'];

// Use spread instead of concat to concatenate multiple arrays
var numbers = [1, 2, 3];
numbers.push(...[4, 5, 6], ...[7,8,9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

As you can see, unlike the rest parameter, the spread operator is not limited to a single argument, nor does it have to be the last argument. Try them out, and you might enjoy writing fewer lines of code...
