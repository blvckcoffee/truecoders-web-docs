---
title: Loops
---

In JavaScript, loops give us an easy way to do repetitive tasks. There are situations where you have to write a statement or execute logic multiple times or display a message with a slight variation in numbers. There are various situations where one type of loop may be preferred over another, as we will see later.

Types of JavaScript Loops:

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true

### For Loops

A _for_ loop will repeat until a specified condition evaluates to false.

Syntax:

```javascript
for ([initialization]; [condition]; [increment / decrement]) {
  //code to be executed
}
```

Example:

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```
