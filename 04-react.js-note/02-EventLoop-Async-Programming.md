# Node.js – Event Loop and Asynchronous Programming

## 1. Synchronous vs Asynchronous
Synchronous code ek ke baad ek execute hota hai. Asynchronous operation ka result baad mein handle ho sakta hai, jisse I/O wait ke dauran doosra code execute ho sake.

```js
console.log("One");
console.log("Two");
console.log("Three");
```

Ye synchronous order mein print hota hai.

## 2. Callback
Callback ek function hai jo doosre function ko argument ke roop mein diya jata hai aur baad mein call hota hai.

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) return console.error(error);
  console.log(data);
});
```

Nested callbacks bahut zyada ho jaayein to code difficult ho sakta hai; ise callback nesting/callback hell kaha jata hai.

## 3. Promise
Promise asynchronous operation ka future result represent karta hai. Iski states: pending, fulfilled aur rejected.

```js
fetch("https://example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

`then()` success result handle karta hai aur `catch()` rejection/error.

## 4. async/await
`async` function Promise return karta hai. `await` Promise settle hone tak us async function ke execution ko pause karta hai, poore Node.js event loop ko block nahi karta.

```js
async function loadData() {
  try {
    const response = await fetch("https://example.com/data");
    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

loadData();
```

## 5. Event Loop
Event Loop Node.js ko asynchronous callbacks coordinate karne mein help karta hai. JavaScript call stack free hone par queued callbacks appropriate phases mein execute hote hain. Promise handlers microtask processing ka part hain.

Simple mental model:
1. Synchronous JavaScript execute hoti hai.
2. I/O operation runtime/OS ko delegate ho sakta hai.
3. Operation complete hone par callback schedule hota hai.
4. Event Loop eligible callback ko execute karwata hai.

Event Loop ko sirf “callback queue se ek-ek function uthata hai” kehna simplified explanation hai; actual phases aur microtask ordering zyada detailed hain.

## 6. Error handling
Async function mein `try/catch` use karein. Promise chain mein `.catch()` use karein. Express route handlers mein rejected promises ko handle karna zaroori hai.

## 7. Interview revision
**Q. Callback?** Function jo kisi doosre function ko pass hota hai aur later execute hota hai.

**Q. Promise?** Asynchronous result ko represent karta hai.

**Q. async/await?** Promise-based code ko readable syntax mein likhne ka tareeka.

**Q. Event Loop?** Asynchronous callbacks aur JavaScript execution ko coordinate karne wala mechanism.

**Q. Kya await Node.js ko block karta hai?** Await current async function ko pause karta hai; event loop doosra kaam kar sakta hai.
