# MongoDB – CRUD and Queries

## 1. CRUD kya hai?
CRUD ka matlab Create, Read, Update, Delete. Ye database ke basic operations hain.

MongoDB Shell (`mongosh`) examples:

### Create
```js
db.users.insertOne({
  name: "Amit",
  email: "amit@example.com",
  age: 21
});

db.users.insertMany([
  { name: "Riya", age: 22 },
  { name: "Rahul", age: 23 }
]);
```

### Read
```js
db.users.find();
db.users.findOne({ email: "amit@example.com" });
db.users.find({ age: 21 });
```

### Update
```js
db.users.updateOne(
  { email: "amit@example.com" },
  { $set: { age: 22 } }
);
```

### Delete
```js
db.users.deleteOne({ email: "amit@example.com" });
```

## 2. Query operators
- `$eq` – equal.
- `$ne` – not equal.
- `$gt` – greater than.
- `$gte` – greater than or equal.
- `$lt` – less than.
- `$lte` – less than or equal.
- `$in` – supplied values mein se match.

Example:

```js
db.users.find({ age: { $gte: 18 } });
db.users.find({ role: { $in: ["admin", "editor"] } });
```

## 3. Logical operators
`$and`, `$or`, `$not`, `$nor` multiple conditions combine karte hain.

```js
db.users.find({
  $or: [
    { city: "Lucknow" },
    { age: { $gte: 25 } }
  ]
});
```

## 4. Projection, sorting and limit
```js
db.users.find(
  { age: { $gte: 18 } },
  { name: 1, email: 1, _id: 0 }
).sort({ name: 1 }).limit(10);
```

- Projection selected fields return karta hai.
- `sort({ name: 1 })` ascending order.
- `sort({ name: -1 })` descending order.
- `limit(10)` maximum 10 results.

## 5. Update operators
- `$set` – field set/update.
- `$inc` – numeric field increment.
- `$unset` – field remove.
- `$push` – array mein item add.
- `$pull` – condition match karne wala array item remove.

## 6. Interview revision
**Q. CRUD?** Create, Read, Update, Delete.

**Q. `find()` vs `findOne()`?** Multiple matching documents vs one matching document.

**Q. `$set`?** Selected field ko set/update karta hai.

**Q. Projection?** Result mein kaunse fields return honge control karta hai.

**Q. Sort 1 vs -1?** Ascending vs descending.
