# MongoDB – Indexing and Aggregation

## 1. Index kya hai?
Index database ko selected fields par documents efficiently find karne mein help karta hai. Index ke bina query ko collection scan karna pad sakta hai.

```js
db.users.createIndex({ email: 1 }, { unique: true });
```

`1` ascending index order aur `-1` descending order represent karta hai. Unique index duplicate indexed values ko prevent karta hai (existing data aur index rules ke subject to).

## 2. Index ke advantages aur trade-offs
Advantages:
- Suitable queries faster ho sakti hain.
- Unique constraints enforce kar sakta hai.
- Sorting/filtering mein help kar sakta hai.

Trade-offs:
- Extra disk/storage use hota hai.
- Insert/update/delete par index maintenance overhead hota hai.
- Har field par index banana useful nahi.

## 3. Compound index
Multiple fields par index:

```js
db.orders.createIndex({ userId: 1, createdAt: -1 });
```

Index order query patterns ke according choose karna chahiye. Query performance check karne ke liye `explain()` useful hai.

## 4. Aggregation kya hai?
Aggregation pipeline documents ko stages se pass karke transform, group aur calculate karti hai.

Example: status ke basis par orders count:

```js
db.orders.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$userId",
      totalOrders: { $sum: 1 }
    }
  },
  { $sort: { totalOrders: -1 } }
]);
```

## 5. Common aggregation stages
- `$match` – documents filter.
- `$group` – values group aur calculations.
- `$project` – output fields shape.
- `$sort` – order.
- `$limit` – result count limit.
- `$unwind` – array elements ko separate documents mein expand.
- `$lookup` – another collection se join-like data fetch.

## 6. Interview revision
**Q. Index?** Query ko efficient banane wala data structure.

**Q. Index ka disadvantage?** Storage aur write-operation overhead.

**Q. Aggregation?** Pipeline-based data processing/analysis.

**Q. `$match`?** Documents filter karta hai.

**Q. `$group`?** Common key ke basis par documents group karta hai.

**Q. `$lookup`?** Collections ke beech join-like operation.
