# 03. Functions, Scope, Hoisting & Closures

## 1. Function Kya Hai?
Function reusable code block hai jo ek specific task perform karta hai.

### Function Declaration
```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));
```

### Function Expression
```js
const greet = function () {
  console.log("Hello");
};
greet();
```

### Arrow Function
```js
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));
```

### Parameters, Arguments & Return
- Parameter: function definition mein variable, jaise `a`, `b`.
- Argument: function call ke waqt actual value, jaise `5`, `3`.
- `return`: function se result wapas bhejta hai.

## 2. Scope
Scope batata hai variable kahan access ho sakta hai.

- Global Scope: outer/main level par declared variable.
- Function Scope: function ke andar declared `var` ya local variables.
- Block Scope: `{}` ke andar declared `let` aur `const`.

```js
let city = "Delhi";

function showCity() {
  let message = "City: " + city;
  console.log(message);
}
showCity();
```

## 3. Hoisting
JavaScript declarations ko execution se pehle process karta hai. `var` declaration ko `undefined` se initialize kiya jata hai; `let`/`const` initialization se pehle Temporal Dead Zone mein rehte hain.

```js
console.log(x); // undefined
var x = 10;

// console.log(y); // ReferenceError
let y = 20;
```

Function declaration ko declaration se pehle call kiya ja sakta hai:

```js
sayHi();
function sayHi() {
  console.log("Hi");
}
```

## 4. Callback Function
Jab ek function doosre function ko argument ke roop mein pass hota hai, use callback kehte hain.

```js
function processUser(name, callback) {
  console.log("User: " + name);
  callback();
}
processUser("Amit", () => console.log("Done"));
```

## 5. Closure
Closure tab hota hai jab inner function apne outer lexical scope ke variables ko yaad rakhta hai, outer function finish hone ke baad bhi.

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Use cases:** private state, counters, function factories aur callbacks.

## 6. this Keyword
`this` ka value function ko kaise call kiya gaya hai, us par depend karta hai. Object method mein `this` usually calling object ko refer karta hai. Arrow function apna `this` create nahi karta; outer scope se leta hai.

```js
const user = {
  name: "Amit",
  show() {
    console.log(this.name);
  }
};
user.show(); // Amit
```

## Quick Revision
- Function code reuse karta hai.
- Scope variable ki accessibility define karta hai.
- Closure outer variables ko preserve karta hai.
- Arrow function ka apna `this` nahi hota.
