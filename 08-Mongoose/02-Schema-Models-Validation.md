# Mongoose – Schema, Models and Validation

## 1. Schema banana
```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
```

## 2. Common schema options
- `type` – field data type.
- `required` – field required.
- `default` – default value.
- `trim` – string ke edges se whitespace remove.
- `lowercase` – string lowercase.
- `min` / `max` – number range validation.
- `enum` – allowed values.
- `timestamps` – `createdAt` aur `updatedAt` add.

## 3. Validation
Mongoose schema validation model save/update operations ke dauran invalid data reject karne mein help karti hai. API request ko bhi validate karein; database schema validation ko frontend validation ka replacement na samjhein.

```js
const user = new User({
  name: "Amit",
  email: "amit@example.com",
  age: 21
});

await user.save();
```

`unique: true` ko normal Mongoose validator na samjhein; ye unique index create karne ke liye schema option hai. Duplicate key error ko application mein handle karein.

## 4. Model aur document
```js
const user = await User.create({
  name: "Riya",
  email: "riya@example.com"
});

console.log(user._id);
```

`User` model collection ke saath interact karta hai. `user` returned document instance hai.

## 5. Interview revision
**Q. Schema?** Document structure aur validation rules define karta hai.

**Q. Model?** Schema se bana collection interaction interface.

**Q. timestamps?** `createdAt` aur `updatedAt` maintain karta hai.

**Q. enum?** Field ke allowed values define karta hai.

**Q. unique vs required?** Required field presence validate karta hai; unique index duplicate values prevent karta hai.
