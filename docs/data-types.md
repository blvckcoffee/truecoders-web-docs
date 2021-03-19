---
title: Data Types
---

The latest ECMAScript standard defines nine types:

- Six Data Types that are **primitives**, checked by typeof operator:
  - undefined : typeof instance === "undefined"
  - Boolean : typeof instance === "boolean"
  - Number : typeof instance === "number"
  - String : typeof instance === "string"
  - BigInt : typeof instance === "bigint"
  - Symbol : typeof instance === "symbol"
- Structural Types:
  - Object : typeof instance === "object". Special non-data but Structural type for any constructed object instance also used as data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
  - Function : a non-data structure, though it also answers for typeof operator: typeof instance === "function". This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.
- Structural Root Primitive:
  - null : typeof instance === "object". Special primitive type having additional usage for its value: if object is not inherited, then null is shown;

Something that does not yet exist or does not exist anymore is: _undefined_.

But when we wish to be able to represent something that exists being empty, we have to invent another keyword. And that is what _null_ stands for.

**Undefined** - undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

```javascript
var x //create a variable, but assign it no value
console.log("x's value is ", x) //logs "x's value is undefined"
```

**Null** - a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address.

```javascript
let myObject = null
```

**Boolean** - boolean is a logical data type that can have only the values true or false.

```javascript
let isCorrect = true
```

**Number** - In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages, different numeric types exist, such as Integers, Floats, Doubles, or Bignums. However, in JavaScript, there is only **one** type of number. Numbers can be written with or without decimals.

```javascript
let x = 3.14 // a number with decimal places
let y = 3 // a number without decimal places
```

**String** - A string is a sequence of characters used to represent text. In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive.

```javascript
let x = 'Strings can be surrounded by single or double quotation marks.'
let y = `Backtick characters can also be used.`
```
