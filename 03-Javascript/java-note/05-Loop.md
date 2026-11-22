# 05. ES6+, Execution Context & Event Loop

## 1. ES6+ Features
ES6 (ECMAScript 2015) ne JavaScript mein kai modern features introduce kiye.

### Template Literals
Backticks aur `${}` se string ke andar values insert kar sakte hain.
```js
const name = "Amit";
console.log(`Hello ${name}`);
```

### Destructuring
```js
const user = { name: "Amit", age: 21 };
const { name, age } = user;

const colors = ["red", "blue"];
const [first, second] = colors;
```

### Spread Operator
Array/object ko expand karta hai; copy shallow hoti hai.
```js
const oldNums = [1, 2];
const newNums = [...oldNums, 3];
```

### Rest Parameter
Multiple arguments ko array mein collect karta hai.
```js
function sum(...values) {
  return values.reduce((total, value) => total + value, 0);
}
```

### Default Parameters
```js
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

### Optional Chaining and Nullish Coalescing
```js
const city = user.address?.city;
const displayName = user.name ?? "Guest";
```
`??` fallback tab deta hai jab left side `null` ya `undefined` ho.

## 2. let, const and var – Important Reminder
- `var`: function-scoped.
- `let` / `const`: block-scoped.
- `const` binding reassign nahi hoti; object ke properties mutate ho sakte hain.

## 3. Execution Context
Execution Context wo environment hai jahan JavaScript code evaluate aur execute hota hai.

Common concepts:
- Global Execution Context
- Function Execution Context
- Creation phase and execution phase

## 4. Call Stack
Call Stack function calls ko track karta hai. Function call hone par stack mein add hota hai aur complete hone par remove hota hai.

## 5. Event Loop
Event Loop JavaScript runtime mein synchronous execution aur queued asynchronous callbacks ko coordinate karta hai.

Important parts:
- Call Stack
- Runtime APIs (browser Web APIs / Node APIs)
- Task Queue
- Microtask Queue
- Event Loop

Promise callbacks (microtasks) generally timer callbacks (tasks) se pehle process hote hain, jab current stack empty hota hai.

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

// Output: A, D, C, B
```

## 6. Shallow Copy and Deep Copy
Shallow copy top-level properties copy karti hai, nested objects ke references share ho sakte hain.

```js
const original = { name: "Amit", address: { city: "Delhi" } };
const copy = { ...original };
copy.address.city = "Pune";
console.log(original.address.city); // Pune
```

Deep copy supported data ke liye:
```js
const deepCopy = structuredClone(original);
```

## Quick Revision
- Spread = expand; Rest = collect.
- Destructuring values extract karta hai.
- Event Loop asynchronous callbacks ko schedule/process karne mein help karta hai.
- Shallow copy nested references share kar sakti hai.
