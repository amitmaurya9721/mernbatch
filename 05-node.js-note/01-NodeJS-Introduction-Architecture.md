# Node.js – Introduction and Architecture

## 1. Node.js kya hai?
Node.js open-source JavaScript runtime environment hai jo JavaScript ko browser ke bahar run karne deta hai. Iska use APIs, backend services, command-line tools aur real-time applications banane mein hota hai.

Node.js language nahi hai; JavaScript language hai aur Node.js runtime hai.

## 2. Node.js kyun use karte hain?
- Frontend aur backend dono mein JavaScript use kar sakte hain.
- Non-blocking I/O model I/O-heavy work ke liye useful hai.
- NPM ecosystem se packages use kar sakte hain.
- APIs aur network applications develop karna convenient hai.

Node.js har CPU-heavy task ke liye automatically best choice nahi hai. Heavy computation ko carefully handle karna hota hai.

## 3. V8 engine aur runtime
Node.js Google Chrome ke V8 JavaScript engine ka use karta hai. Runtime ke saath additional APIs aur native components milte hain, jaise file system aur networking capabilities.

## 4. Event-driven, non-blocking I/O
I/O ka matlab input/output operations, jaise file read ya network request. Non-blocking approach mein Node.js I/O completion ka wait karte hue poora JavaScript execution thread block nahi karta; completion par callback/promise handling hoti hai.

Example:

```js
const fs = require("fs");

console.log("Start");

fs.readFile("notes.txt", "utf8", (error, data) => {
  if (error) return console.error(error);
  console.log(data);
});

console.log("End");
```

Aam taur par output mein `Start`, `End`, phir file content aata hai, kyunki file reading asynchronous hai.

## 5. Node.js ka use kahan hota hai?
- REST APIs aur backend services.
- Real-time apps, jaise chat systems.
- Streaming/network applications.
- Developer tools aur automation scripts.

## 6. Node.js vs Browser JavaScript
| Browser JavaScript | Node.js |
|---|---|
| Browser environment mein run | Server/local runtime mein run |
| DOM access available | Built-in DOM nahi |
| `window`, `document` browser APIs | `process`, `fs`, `http` jaise Node APIs |
| UI interaction common | Server, files, networking common |

## 7. Interview revision
**Q. Node.js kya hai?** V8-based JavaScript runtime jo browser ke bahar JavaScript run karta hai.

**Q. Node.js single-threaded hai?** JavaScript execution ka main thread typically single-threaded hota hai, lekin runtime background I/O aur worker mechanisms use kar sakta hai.

**Q. Non-blocking I/O?** I/O operation ke complete hone ka wait karke main JavaScript flow ko block na karna.

**Q. Node.js ke common use cases?** APIs, backend services, real-time/network applications.
