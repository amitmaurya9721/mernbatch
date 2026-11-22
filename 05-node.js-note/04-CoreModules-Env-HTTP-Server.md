# Node.js – Core Modules, Environment Variables and HTTP

## 1. File System (`fs`)
`fs` module files read/write karne ke methods deta hai. Async methods use karna server applications mein useful hota hai.

```js
const fs = require("fs/promises");

async function readNotes() {
  try {
    const text = await fs.readFile("notes.txt", "utf8");
    console.log(text);
  } catch (error) {
    console.error(error.message);
  }
}

readNotes();
```

## 2. Path module
`path` operating-system-compatible file paths banane mein help karta hai.

```js
const path = require("path");

const filePath = path.join(__dirname, "files", "notes.txt");
console.log(filePath);
```

`path.join()` path separators ko handle karta hai.

## 3. OS module
`os` operating system information deta hai.

```js
const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
```

## 4. Process aur environment variables
`process` current Node.js process ko represent karta hai. Environment variables configuration/secrets ko code se separate rakhte hain.

```js
console.log(process.env.PORT);
```

`.env` file use karne ke liye commonly:

```bash
npm install dotenv
```

```js
require("dotenv").config();

const port = process.env.PORT || 5000;
```

`.env` ko GitHub par commit nahi karein. `.env.example` mein variable names aur placeholder values de sakte hain.

## 5. HTTP module se basic server
Node ka built-in `http` module low-level HTTP server banane deta hai. Express isi tarah ke server work ko higher-level API deta hai.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

## 6. Port kya hota hai?
Port machine par network service ko identify karta hai. Local development mein backend `5000` aur frontend kisi doosre port par run ho sakte hain. Production port environment variable se read karna common pattern hai.

## 7. Interview revision
**Q. fs module?** Files read/write karne ke liye.

**Q. path module?** Cross-platform file paths construct karne ke liye.

**Q. process.env?** Environment variables read karne ke liye.

**Q. HTTP module?** Node.js mein low-level HTTP server banane ke liye.

**Q. Secrets code mein kyun nahi?** Repository leak hone par credentials expose ho sakte hain; environment/secret manager use karein.
