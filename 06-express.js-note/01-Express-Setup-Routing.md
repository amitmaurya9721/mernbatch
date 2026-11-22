# Express.js – Introduction, Setup and Routing

## 1. Express.js kya hai?
Express.js Node.js ke upar bana lightweight web framework hai. Ye HTTP routes, middleware aur request/response handling ko simple banata hai.

Node.js runtime hai; Express framework hai. Express khud database nahi hai.

## 2. Express install aur server setup

```bash
mkdir express-api
cd express-api
npm init -y
npm install express
```

```js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
```

`express.json()` JSON request body parse karta hai.

## 3. Routing
Route HTTP method aur URL path ke combination par request handle karta hai.

```js
app.get("/api/products", (req, res) => {
  res.json([{ id: 1, name: "Mouse" }]);
});

app.post("/api/products", (req, res) => {
  res.status(201).json({ message: "Product created" });
});
```

Common methods:
- `GET` – read/retrieve.
- `POST` – create/submit.
- `PUT` – full replacement/update semantics.
- `PATCH` – partial update.
- `DELETE` – delete.

## 4. Route parameters
Dynamic URL segment ko `req.params` se read karte hain.

```js
app.get("/api/products/:id", (req, res) => {
  res.json({ productId: req.params.id });
});
```

Request `/api/products/25` par `id` `"25"` milega.

## 5. Query parameters
Query string optional filtering/searching ke liye use hoti hai.

```js
app.get("/api/search", (req, res) => {
  const keyword = req.query.q;
  res.json({ search: keyword });
});
```

URL: `/api/search?q=phone`.

## 6. Router ko alag file mein rakhna
`express.Router()` related routes group karta hai.

```js
// routes/productRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json([]));
router.get("/:id", (req, res) => res.json({ id: req.params.id }));

module.exports = router;
```

```js
// server.js
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
```

## 7. Interview revision
**Q. Express kya hai?** Node.js web framework.

**Q. Route?** HTTP method aur URL ke basis par request handler.

**Q. `req.params` vs `req.query`?** URL path parameters vs query-string values.

**Q. Router?** Related route handlers ko modular group karne ka tool.

**Q. `express.json()`?** Incoming JSON body parse karne wala middleware.
