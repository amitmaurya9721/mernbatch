# 07. Semantic HTML

## 7.1 Semantic Ka Matlab
**Semantic = Meaning wala tag.** Tag dekh ke hi pata chal jaye andar kya hai.

```html
<!-- Non-Semantic: Kuch pata nahi chal raha -->
<div>Header</div>
<div>Menu</div>

<!-- Semantic: Padhte hi samajh aa gaya -->
<header>Header</header>
<nav>Menu</nav>
<main>Main Content</main>
<footer>Footer</footer>
```

## 7.2 Poora Semantic Layout

```html
<body>
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>Main fresher developer hoon...</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <article>
        <h3>Student Portfolio</h3>
        <p>HTML + CSS se banaya...</p>
      </article>
    </section>

    <aside>
      <h3>Quick Links</h3>
      <p>Side wala extra content</p>
    </aside>
  </main>

  <footer><p>© 2026 Rahul</p></footer>
</body>
```

## 7.3 Har Tag Ka Ek Kaam

| Tag | Kab Use Karein |
|---|---|
| `<header>` | Page/section ka top — logo, heading, nav |
| `<nav>` | Main navigation links |
| `<main>` | Page ka main content — SIRF 1 baar |
| `<section>` | Ek topic ka group — About, Projects |
| `<article>` | Khud me poora content — blog post, card |
| `<aside>` | Side content — sidebar, ads |
| `<footer>` | Bottom — copyright, contact |
| `<figure>` / `<figcaption>` | Image + Caption |
| `<time datetime="2026-11-10">` | Date machine-readable format me |

## 7.4 Section vs Article vs Div — Sabse Confusing

| Tag | Kab |
|---|---|
| `<section>` | Jab heading wala bada topic group karna ho |
| `<article>` | Jab content akele bhi samajh aaye — blog, product card |
| `<div>` | Jab koi meaning nahi, sirf styling/grouping ke liye |

> Interview Line: *"Div ka koi matlab nahi, section ka matlab topic hai, article ka matlab independent content hai."*

**Q: Semantic HTML kyu use karte hain?**
Screen reader + SEO + Code readability — teeno ke liye. `div` hi `div` se code samajh nahi aata.