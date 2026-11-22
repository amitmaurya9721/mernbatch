# Mongoose – References, Populate and Middleware

## 1. References
Ek schema field mein doosre model ke document ka ObjectId store kiya ja sakta hai.

```js
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Post = mongoose.model("Post", postSchema);
```

`ref: "User"` batata hai ki reference User model ko point karta hai.

## 2. Populate
`populate()` referenced document ki details query ke through load karne mein help karta hai.

```js
const posts = await Post.find()
  .populate("author", "name email");
```

Yahan author reference ke selected fields `name` aur `email` load honge. Populate ko thoughtful use karein; unnecessary population queries performance impact kar sakti hain.

## 3. Embedding vs referencing
- Embedding: related fields same document ke andar.
- Referencing: related document ki ID store karna aur zarurat par populate karna.

Choice access pattern, data size aur update requirements par depend karti hai.

## 4. Middleware/hooks
Mongoose middleware model operations ke before/after custom logic run kar sakta hai. Example: save se pehle data normalize karna. Password hashing jaise logic ko implement karte waqt correct hook/query coverage aur double-hashing se bachne ka dhyan rakhein.

```js
userSchema.pre("save", function () {
  this.name = this.name.trim();
});
```

Hook ka exact signature aur async behaviour Mongoose version ke according check karein.

## 5. Interview revision
**Q. `ref`?** Schema mein referenced model ka naam batata hai.

**Q. populate?** Referenced document ki details fetch karne mein help karta hai.

**Q. Middleware/hooks?** Model operations ke around custom logic run karne ka mechanism.

**Q. Embedding vs referencing?** Data ko same document mein rakhna vs related document ID refer karna.
