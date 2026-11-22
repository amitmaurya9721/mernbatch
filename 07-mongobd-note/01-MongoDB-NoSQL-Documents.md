# MongoDB – Introduction, NoSQL and Documents

## 1. MongoDB kya hai?
MongoDB ek NoSQL, document-oriented database hai. Data BSON documents ke form mein store hota hai. BSON JSON-jaisa format hai jisme additional data types bhi support hote hain.

MongoDB relational tables/rows ke bajay collections/documents use karta hai.

## 2. Relational database vs MongoDB
| Relational terms | MongoDB terms |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |

Ye conceptual comparison hai; dono database models internally alag hain.

## 3. Database, Collection, Document, Field
- Database: collections ka container.
- Collection: related documents ka group.
- Document: ek record.
- Field: document ki property.

Example:

```json
{
  "_id": "generated-id",
  "name": "Amit",
  "email": "amit@example.com",
  "skills": ["JavaScript", "React"]
}
```

`_id` document ka unique identifier hota hai; MongoDB usually automatically generate karta hai.

## 4. Flexible document model
MongoDB documents mein nested objects aur arrays store kar sakte hain. Collection ke documents ka exact same shape hona mandatory nahi, lekin application consistency ke liye schema rules useful hote hain.

```json
{
  "title": "Learn MERN",
  "owner": {
    "name": "Amit",
    "email": "amit@example.com"
  },
  "tags": ["react", "node"]
}
```

## 5. MongoDB kab useful hai?
- Application data document format mein naturally fit hota ho.
- Nested data store karna convenient ho.
- Application ko flexible schema ki zarurat ho.

Data modeling query patterns aur relationships ko dekhkar karni chahiye; har case mein NoSQL automatically better nahi hota.

## 6. Interview revision
**Q. MongoDB?** NoSQL document database.

**Q. Collection vs Document?** Collection documents ka group; document ek record.

**Q. BSON?** MongoDB ka binary-encoded document representation.

**Q. `_id`?** Har document ka unique identifier.

**Q. NoSQL ka matlab?** Non-relational database category; iska matlab “SQL bilkul nahi” nahi hai.
