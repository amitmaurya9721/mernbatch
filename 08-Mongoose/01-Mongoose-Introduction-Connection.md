# Mongoose – Introduction and MongoDB Connection

## 1. Mongoose kya hai?
Mongoose Node.js ke liye ODM (Object Data Modeling) library hai. Ye MongoDB ke saath schemas, models, validation aur query methods ke through kaam karne ka structured interface deti hai.

MongoDB database hai; Mongoose Node.js application ki library hai.

## 2. Install
```bash
npm install mongoose
```

## 3. MongoDB connection
```js
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
```

`MONGO_URI` ko `.env` mein rakhein. Application ko database connect hone ke baad start karna ek common reliable pattern hai.

## 4. Schema, Model and Document
- **Schema:** document fields, types, defaults aur validation rules define karta hai.
- **Model:** schema se create hota hai aur collection ke saath operations provide karta hai.
- **Document:** model ka individual record/instance hota hai.

## 5. Mongoose ka benefit
- Structured schema definition.
- Built-in validation support.
- Convenient CRUD/query methods.
- Middleware/hooks aur population features.
- Node.js code ko database model ke saath organize karna.

## 6. Interview revision
**Q. ODM?** Object Data Modeling; application objects aur document database ke beech structured mapping.

**Q. Mongoose?** MongoDB ke liye Node.js ODM.

**Q. MongoDB vs Mongoose?** MongoDB database; Mongoose application library.

**Q. Schema vs Model?** Schema structure define karta hai; Model collection par operations karta hai.
