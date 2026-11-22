# 01. JavaScript Introduction, Variables & Data Types

## 1. JavaScript Kya Hai?
JavaScript ek high-level, dynamically typed programming language hai. Iska use websites ko interactive banane, frontend development, backend development (Node.js), APIs aur full-stack applications mein hota hai.

- HTML = Structure
- CSS = Design
- JavaScript = Functionality / Behaviour

## 2. JavaScript Kahan Use Hoti Hai?
- Browser mein interactive websites
- Form validation aur DOM manipulation
- API se data lena aur bhejna
- React ke through frontend
- Node.js aur Express ke through backend

## 3. Variables
Variable data store karne ka named container hai.

```js
var oldWay = "Hello";
let age = 21;
const country = "India";
```

| Keyword | Scope | Reassign | Redeclare (same scope) |
|---|---|---|---|
| `var` | Function | Yes | Yes |
| `let` | Block | Yes | No |
| `const` | Block | No | No |

Modern JavaScript mein default choice `const` rakhein; value reassign karni ho to `let` use karein. `const` object/array ke contents ko automatically immutable nahi banata.

## 4. Data Types
**Primitive:** String, Number, Boolean, Undefined, Null, BigInt, Symbol.  
**Non-primitive:** Object (arrays aur functions bhi objects ki category mein aate hain).

```js
let name = "Amit";       // string
let marks = 85;          // number
let passed = true;       // boolean
let result;              // undefined
let selected = null;     // null
let id = 123n;            // bigint
let user = { name: "Amit" };
let skills = ["HTML", "CSS", "JS"];
```

`typeof` data type batata hai:

```js
typeof "Hello"; // "string"
typeof 10;      // "number"
typeof true;    // "boolean"
typeof null;    // "object" (historical JavaScript behavior)
```

## 5. Type Conversion
Explicit conversion ka example:

```js
Number("25");   // 25
String(100);    // "100"
Boolean(1);     // true
parseInt("12px"); // 12
```

**Yaad rakhein:** `==` type conversion kar sakta hai; `===` strict comparison karta hai. Generally `===` prefer karein.

## Quick Revision
- JavaScript dynamically typed hai.
- `let` aur `const` block-scoped hain.
- `null` intentional empty value ko show karta hai.
- `undefined` usually unassigned value ko show karta hai.
