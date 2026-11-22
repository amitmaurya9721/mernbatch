# MongoDB – Relationships, Atlas and Data Management

## 1. Document relationships
Applications mein documents ke beech relationships ho sakte hain. MongoDB mein common approaches embedding aur referencing hain.

### Embedding
Related data ko same document ke andar nested form mein rakhna.

```json
{
  "name": "Amit",
  "address": {
    "city": "Lucknow",
    "pincode": "226001"
  }
}
```

Jab related data saath read hota ho aur size/updates manageable hon, embedding useful ho sakti hai.

### Referencing
Ek document doosre document ki ID store karta hai.

```json
{
  "title": "My first post",
  "authorId": "user-document-id"
}
```

Jab related data independently maintain hota ho ya reuse hota ho, referencing useful ho sakti hai.

## 2. MongoDB Atlas
MongoDB Atlas managed cloud database service hai. Ismein cluster create, database user configure aur network access rules set kiye ja sakte hain.

Typical connection steps:
1. Atlas project/cluster create karein.
2. Database user banayein.
3. Required IP/network access configure karein.
4. Connection string copy karein.
5. Connection string ko backend environment variable mein rakhein.

Database password ko GitHub par commit nahi karein. Broad network access rules production mein avoid karein.

## 3. Backup aur restore ka basic idea
Database backup data loss se recovery mein help karta hai. Production systems mein managed backup policies ya suitable MongoDB backup tools use karein. Restore process ko test karna bhi zaroori hai.

## 4. Data modeling tips
- Application ke common queries ko samajhkar schema design karein.
- Unbounded arrays se bachein.
- Frequently accessed related fields ko suitable model karein.
- Index sirf useful query patterns ke liye add karein.
- Sensitive data aur credentials carefully protect karein.

## 5. Interview revision
**Q. Embedding vs Referencing?** Related data same document mein rakhna vs doosre document ki ID store karna.

**Q. Atlas?** Managed cloud MongoDB service.

**Q. Connection string kahan rakhein?** Backend environment variable/secret configuration mein.

**Q. Backup kyun?** Accidental deletion, failure ya data loss se recovery ke liye.
