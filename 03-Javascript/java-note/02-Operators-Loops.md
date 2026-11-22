# 02. Operators, Conditional Statements & Loops

## 1. Operators
Operators values par operations perform karte hain.

### Arithmetic
```js
let a = 10, b = 3;
a + b;  // 13
a - b;  // 7
a * b;  // 30
a / b;  // 3.333...
a % b;  // 1 (remainder)
a ** b; // 1000
```

### Comparison
```js
10 == "10";  // true: loose equality
10 === "10"; // false: strict equality
10 > 5;      // true
10 !== 5;    // true
```

### Logical
- `&&` – AND: dono conditions true honi chahiye.
- `||` – OR: kam se kam ek condition true ho.
- `!` – NOT: boolean result reverse karta hai.

### Assignment
`=`, `+=`, `-=`, `*=`, `/=`, `%=`

## 2. Conditional Statements
Condition ke basis par code choose karte hain.

```js
let marks = 76;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

### Switch
Multiple fixed cases handle karne ke liye:

```js
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

`break` next case mein fall-through rokta hai.

## 3. Loops
Repeated task perform karne ke liye loops use hote hain.

### for
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### while
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### do...while
Body kam se kam ek baar execute hoti hai.

```js
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 3);
```

### for...of and for...in
```js
const nums = [10, 20, 30];
for (const value of nums) console.log(value);

const user = { name: "Amit", age: 21 };
for (const key in user) console.log(key, user[key]);
```

- `for...of` iterable values (array, string) ke liye.
- `for...in` object ki enumerable keys ke liye.

## 4. break and continue
- `break`: loop ko stop karta hai.
- `continue`: current iteration skip karta hai.

## Quick Revision
- `===` ko preference dein.
- Infinite loop se bachne ke liye loop condition/update check karein.
- Array values ke liye usually `for...of` ya array methods use karein.
