# Express.js – Middleware and Error Handling

## 1. Middleware kya hai?
Middleware function request-response cycle ke beech execute hota hai. Middleware request inspect/modify kar sakta hai, response bhej sakta hai ya `next()` se next middleware ko control de sakta hai.

```js
function requestLogger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(requestLogger);
```

`next()` call karna zaroori hai agar middleware response bheje bina aage continue karna chahta hai.

## 2. Middleware ke common uses
- Request logging.
- Authentication.
- Authorization.
- Input validation.
- JSON parsing.
- Error handling.
- CORS configuration.

Built-in middleware example:

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

## 3. Application-level aur route-level middleware
Application-level middleware `app.use()` se broadly apply hota hai. Route-level middleware specific route par apply hota hai.

```js
function checkApiKey(req, res, next) {
  if (req.headers["x-api-key"] !== process.env.API_KEY) {
    return res.status(401).json({ message: "Invalid API key" });
  }
  next();
}

app.get("/api/private", checkApiKey, (req, res) => {
  res.json({ message: "Access granted" });
});
```

## 4. Error-handling middleware
Express error middleware ke four parameters hote hain: `(err, req, res, next)`. Isse routes se errors central location par handle kiye ja sakte hain.

```js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.status ? err.message : "Internal server error"
  });
});
```

Error middleware ko routes ke baad register karein. Production response mein stack trace ya secrets expose na karein.

## 5. Async errors
Async route handler mein errors catch karke `next(error)` ya suitable wrapper use karein. Express version ke behaviour ko dhyan mein rakhein; explicit handling readable aur predictable hoti hai.

```js
app.get("/api/example", async (req, res, next) => {
  try {
    const result = await someAsyncOperation();
    res.json(result);
  } catch (error) {
    next(error);
  }
});
```

## 6. CORS
CORS (Cross-Origin Resource Sharing) browser security mechanism hai. Agar React frontend aur Express backend alag origins/ports par hain, backend ko allowed frontend origin configure karna pad sakta hai.

```bash
npm install cors
```

```js
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173"
}));
```

Production mein required origins hi allow karein; credentials use kar rahe hon to cookie/CORS settings carefully configure karein.

## 7. Interview revision
**Q. Middleware?** Request aur response ke beech execute hone wala function.

**Q. `next()`?** Control next middleware/handler ko pass karta hai.

**Q. Error middleware signature?** `(err, req, res, next)`.

**Q. CORS?** Browser ko cross-origin requests ke liye server-defined access rules enforce karne deta hai.

**Q. Error handling centralized kyun?** Consistent responses aur maintainable code ke liye.
