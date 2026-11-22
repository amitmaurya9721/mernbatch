# Express.js – Request, Response, REST APIs and CRUD

## 1. Request aur Response
- `req` incoming HTTP request ko represent karta hai.
- `res` server ka HTTP response bhejne ke liye hota hai.

Useful request properties:
- `req.params` – route parameters.
- `req.query` – query string.
- `req.body` – parsed request body.
- `req.headers` – request headers.

Useful response methods:
- `res.send()` – response send.
- `res.json()` – JSON response.
- `res.status()` – status code set.
- `res.redirect()` – redirect.

## 2. REST API kya hai?
REST ek architectural style hai. REST-style API resources ko URLs se represent karti hai aur HTTP methods se actions express karti hai.

Example resource: products.

| Method | URL | Meaning |
|---|---|---|
| GET | `/api/products` | All products |
| GET | `/api/products/:id` | One product |
| POST | `/api/products` | Create product |
| PATCH | `/api/products/:id` | Partial update |
| DELETE | `/api/products/:id` | Delete product |

## 3. Common HTTP status codes
- `200 OK` – successful request.
- `201 Created` – resource created.
- `204 No Content` – successful response without body.
- `400 Bad Request` – invalid input.
- `401 Unauthorized` – authentication missing/invalid.
- `403 Forbidden` – authenticated user ko permission nahi.
- `404 Not Found` – resource nahi mila.
- `500 Internal Server Error` – unexpected server error.

## 4. Simple CRUD example
Ye example in-memory array use karta hai, database nahi. Real project mein MongoDB/Mongoose use hoga.

```js
const express = require("express");
const app = express();
app.use(express.json());

let products = [{ id: 1, name: "Keyboard" }];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const name = req.body.name?.trim();
  if (!name) return res.status(400).json({ message: "Name required" });

  const product = { id: Date.now(), name };
  products.push(product);
  res.status(201).json(product);
});

app.patch("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: "Not found" });

  product.name = req.body.name ?? product.name;
  res.json(product);
});

app.delete("/api/products/:id", (req, res) => {
  const before = products.length;
  products = products.filter(p => p.id !== Number(req.params.id));
  if (products.length === before) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(204).send();
});

app.listen(5000);
```

## 5. API validation
Client se aane wale data par trust nahi karna chahiye. Required fields, data types, length aur allowed values validate karein. Invalid input par `400` response dein.

## 6. Interview revision
**Q. CRUD?** Create, Read, Update, Delete.

**Q. REST API?** Resource-based API design jo HTTP methods ka use karti hai.

**Q. PUT vs PATCH?** PUT generally resource replacement; PATCH partial modification.

**Q. 401 vs 403?** 401 authentication issue; 403 permission issue.

**Q. `res.json()`?** JSON response send karta hai.
