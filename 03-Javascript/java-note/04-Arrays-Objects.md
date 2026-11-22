# 04. Arrays, Objects & Important Methods

## 1. Arrays
Array ek ordered collection hai jisme multiple values store hoti hain. Index `0` se start hota hai.

```js
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Apple
```

### Common Array Methods

| Method | Kaam |
|---|---|
| `push()` | End mein item add |
| `pop()` | Last item remove |
| `unshift()` | Start mein item add |
| `shift()` | First item remove |
| `slice()` | Portion ki shallow copy |
| `splice()` | Original array mein add/remove/replace |
| `includes()` | Value present hai ya nahi |
| `find()` | First matching element |
| `map()` | Har element transform; new array |
| `filter()` | Condition pass elements; new array |
| `reduce()` | Values ko single result mein combine |
| `forEach()` | Har element par callback; useful return array nahi |

### map()
```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

### filter()
```js
const nums = [10, 15, 20, 25];
const big = nums.filter(n => n >= 20);
console.log(big); // [20, 25]
```

### reduce()
```js
const nums = [10, 20, 30];
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(total); // 60
```

**Note:** `sort()` original array ko mutate karta hai. Numbers sort karne ke liye:
```js
[10, 2, 30].sort((a, b) => a - b); // [2, 10, 30]
```

## 2. Objects
Object key-value pairs ka collection hai. Related data ko ek jagah rakhne ke liye use hota hai.

```js
const student = {
  name: "Amit",
  age: 21,
  course: "CSE"
};

console.log(student.name);
console.log(student["age"]);
```

### Add, Update, Delete
```js
student.city = "Lucknow"; // add
student.age = 22;         // update
delete student.city;      // delete
```

### Object Methods
```js
const user = {
  name: "Amit",
  greet() {
    console.log(`Hello ${this.name}`);
  }
};
user.greet();
```

Useful methods:
- `Object.keys(obj)` – keys ka array
- `Object.values(obj)` – values ka array
- `Object.entries(obj)` – key-value pairs ka array

## 3. Array vs Object
- Array: ordered list, numeric indexes.
- Object: named properties / key-value data.

## Quick Revision
- `map()` transform karta hai.
- `filter()` select karta hai.
- `reduce()` aggregate karta hai.
- `slice()` original ko change nahi karta; `splice()` original ko change karta hai.
