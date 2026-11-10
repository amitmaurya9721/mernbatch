# 03. Text & Lists

## 3.1 Headings — h1 se h6

```html
<h1>Main Heading — Page me SIRF 1 baar</h1>
<h2>Section Heading</h2>
<h3>Sub-Section</h3>
<h4>Chhota Heading</h4>
<h5>Aur Chhota</h5>
<h6>Sabse Chhota</h6>
```

**Golden Rules:**
1. `h1` sirf 1 baar.
2. Size ke liye heading MAT use karo. Size ke liye CSS hai.
3. Order mat todo: `h1` ke baad seedha `h3` mat kudo.

## 3.2 Paragraph & Formatting

```html
<p>Ye ek paragraph hai.</p>

<strong>Important</strong> <!-- Bold + Meaning bhi -->
<b>Bold</b> <!-- Sirf dikhne me bold -->

<em>Emphasis</em> <!-- Italic + Meaning: zor deke bolna -->
<i>Italic</i> <!-- Sirf style -->

<u>Underline</u>
<mark>Highlight</mark>
<small>Chhota text</small>
<del>Deleted</del> <ins>Inserted</ins>
H<sub>2</sub>O | x<sup>2</sup>
<br> <!-- Line Break -->
<hr> <!-- Horizontal Line / Topic Change -->
```

### Sabse Zyada Puche Jane Wale Difference

| Pair | Difference |
|---|---|
| `strong` vs `b` | strong = Bold + Meaning. b = Sirf Bold look. |
| `em` vs `i` | em = Italic + Meaning. i = Sirf Italic look. |
| `br` vs `p` | br = Same para me line break. p = Naya paragraph. |

## 3.3 Lists — 3 Types

### A) Ordered List — Jab Order Matter Kare
```html
<ol type="A" start="2">
  <li>HTML Sikho</li>
  <li>CSS Sikho</li>
</ol>
```
`type = 1, A, a, I, i` | `start` = kahan se shuru | `reversed` = ulta

### B) Unordered List — Jab Order Matter Na Kare
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```
Nav menu, features list — sab `ul` se banta hai.

### C) Description List — Term + Definition
```html
<dl>
  <dt>HTML</dt>
  <dd>Web page ka structure banane wali language.</dd>
</dl>
```
FAQ, Glossary ke liye best.

### Nested List — Menu Isi Se Banta Hai
```html
<ul>
  <li>Home</li>
  <li>Courses
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>
```

## 🎯 Interview Q&A
**Q: h1 kitni baar?**
Sirf 1 baar. SEO me sabse zyada weight isi ka hai.

**Q: strong vs b?**
strong me meaning hai, b me sirf look.
