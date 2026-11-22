# Express.js – MVC Structure and Backend Organization

## 1. MVC kya hai?
MVC ka full form Model-View-Controller hai. Backend API projects mein is pattern ka use code responsibilities separate karne ke liye hota hai.

- **Model:** database structure/data operations.
- **View:** user interface; API-only backend mein React frontend separate view layer provide karta hai.
- **Controller:** request handle karta hai, business logic coordinate karta hai aur response bhejta hai.

## 2. Suggested Express backend structure

```text
server/
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── middleware/
│   └── errorMiddleware.js
├── .env
├── .gitignore
└── server.js
```

Small learning project mein itni separation optional hai, lekin project grow hone par useful hoti hai.

## 3. Route, controller aur model ka flow
1. Client `/api/products` request bhejta hai.
2. Route correct controller function select karta hai.
3. Controller input validate karta hai.
4. Controller model se database operation karwata hai.
5. Controller JSON response bhejta hai.

## 4. Example route and controller

```js
// controllers/productController.js
const Product = require("../models/Product");

async function getProducts(req, res, next) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = { getProducts };
```

```js
// routes/productRoutes.js
const express = require("express");
const { getProducts } = require("../controllers/productController");

const router = express.Router();
router.get("/", getProducts);

module.exports = router;
```

```js
// server.js
app.use("/api/products", require("./routes/productRoutes"));
```

## 5. Environment configuration
Port, database URI aur secrets environment variables mein rakhein. `.env` ko version control mein commit na karein. `.env.example` mein variable names ke placeholders share kar sakte hain.

## 6. Good backend practices
- Route files mein sirf route definitions rakhein.
- Controller mein request/response coordination rakhein.
- Database schema model file mein define karein.
- Input validation aur error handling karein.
- Secrets source code mein hardcode na karein.
- API response structure consistent rakhein.

## 7. Interview revision
**Q. MVC?** Model, View, Controller separation pattern.

**Q. Controller ka role?** Request handle karna, model/service call karna aur response dena.

**Q. Routes ko separate kyun karte hain?** Maintainability aur modularity ke liye.

**Q. Model ka role?** Data structure aur database interaction define karna.
