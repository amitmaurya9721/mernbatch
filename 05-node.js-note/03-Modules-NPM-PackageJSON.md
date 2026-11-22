# Node.js – Modules, NPM and Package Management

## 1. Modules kya hain?
Module code ka reusable unit/file hota hai. Code ko modules mein divide karne se reuse, testing aur maintenance easy hota hai.

Node.js mein commonly CommonJS aur ES Modules use hote hain.

## 2. CommonJS
```js
// calculator.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const calculator = require("./calculator");
console.log(calculator.add(4, 5));
```

`require()` module import karta hai aur `module.exports` values export karta hai.

## 3. ES Modules
```js
// calculator.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./calculator.js";
console.log(add(4, 5));
```

ES Modules use karne ke liye project configuration, jaise `package.json` mein `"type": "module"`, set kar sakte hain. Project mein module system ko consistent rakhein.

## 4. NPM kya hai?
NPM Node.js ecosystem ka package manager hai. Packages install, update aur manage karne ke liye use hota hai.

```bash
npm init -y
npm install express
npm install --save-dev nodemon
npm uninstall express
```

- Normal dependency app run karne ke liye chahiye.
- Dev dependency development tools ke liye hoti hai.

## 5. package.json
`package.json` project metadata, dependencies aur scripts store karta hai.

```json
{
  "name": "my-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

Version examples illustrative hain; install ke waqt current compatible version package manager select karega.

## 6. package-lock.json aur node_modules
- `package-lock.json` dependency tree ke exact resolved versions record karta hai.
- `node_modules/` installed package files rakhta hai.
- `npm install` dependencies install karta hai.
- `npm ci` lockfile ke according clean/reproducible install ke liye CI mein useful hai.

`node_modules/` GitHub par upload nahi karte; `.gitignore` mein add karein. Lockfile ko normally commit karein.

## 7. Useful Node built-in modules
- `fs` – file system operations.
- `path` – file/directory paths handle karna.
- `os` – operating system information.
- `http` – HTTP server/client basics.
- `process` – current Node process aur environment information.

## 8. Interview revision
**Q. Module kya hai?** Reusable code unit.

**Q. CommonJS vs ES Modules?** CommonJS `require/module.exports`; ES Modules `import/export`.

**Q. NPM?** Packages aur project dependencies manage karta hai.

**Q. package.json vs package-lock.json?** Project metadata/dependency ranges vs exact resolved dependency tree.

**Q. nodemon?** Development mein file changes par server restart karta hai.
