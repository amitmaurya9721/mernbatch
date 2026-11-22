# Mongoose – CRUD, Queries and Model Methods

## 1. Create
```js
const user = await User.create({
  name: "Amit",
  email: "amit@example.com"
});
```

Alternative: `new User(data)` aur phir `save()`.

## 2. Read
```js
const users = await User.find();
const user = await User.findOne({ email: "amit@example.com" });
const byId = await User.findById(userId);
```

- `find()` matching documents ki list return karta hai.
- `findOne()` ek matching document ya null.
- `findById()` `_id` se find karta hai.

## 3. Update
```js
const updatedUser = await User.findByIdAndUpdate(
  userId,
  { age: 22 },
  { new: true, runValidators: true }
);
```

`new: true` updated document return karta hai. `runValidators: true` update validators run karne ke liye useful hai.

## 4. Delete
```js
const deletedUser = await User.findByIdAndDelete(userId);
```

Agar record nahi mile to result `null` ho sakta hai; route mein accordingly `404` handle karein.

## 5. Filtering, sorting and selecting fields
```js
const users = await User.find({ age: { $gte: 18 } })
  .select("name email age")
  .sort({ name: 1 })
  .limit(10);
```

- `select()` fields choose karta hai.
- `sort()` result order set karta hai.
- `limit()` result count cap karta hai.

## 6. Async/await and error handling
Database queries asynchronous hoti hain. Express controllers mein `try/catch` use karein aur errors ko centralized error middleware tak bhejein.

```js
async function getUsers(req, res, next) {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    next(error);
  }
}
```

## 7. Interview revision
**Q. `find()` vs `findById()`?** Query conditions ke basis par list vs `_id` ke basis par one document.

**Q. `findByIdAndUpdate()`?** ID se document update karta hai.

**Q. `runValidators`?** Update operation par schema validators run karne ke liye.

**Q. `select("-password")`?** Password field response query result se exclude karta hai.
