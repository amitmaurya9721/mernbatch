# 2.1 Har File Ka Skeleton (Ye Ratta Maar Lo)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello World</h1>
  <p>Mera pehla page.</p>
  <script src="script.js"></script>
</body>
</html>
```

## 2.2 Har Line Ka Matlab

| Line | Kaam |
|---|---|
| `<!DOCTYPE html>` | Browser ko batata hai ye HTML5 hai. Na ho to browser Quirks Mode (purana/galat rendering) me chala jata hai. Ye tag nahi, declaration hai. |
| `<html lang="en">` | Root element. `lang` screen reader + SEO ke liye hai. |
| `<head>` | Browser ke liye info — user ko dikhta nahi. Title, Meta, CSS yahi aata hai. |
| `<meta charset="UTF-8">` | Hindi / Emoji / Special characters sahi dikhane ke liye. |
| `<meta name="viewport" ...>` | Mobile responsive ke liye SABSE important. Bina iske mobile pe site squeezed dikhegi. |
| `<title>` | Tab me + Google Search me dikhne wala naam. |
| `<body>` | Jo user ko dikhna hai, sab yahi. |
| `<link>` | CSS jodne ke liye. |
| `<script>` | JS jodne ke liye, aam taur pe `</body>` se pehle taaki page pehle load ho. |

> **Head = Browser ke liye. Body = User ke liye.**

## 2.3 Block vs Inline — Layout Ki Jaan

| | Block | Inline |
|---|---|---|
| Nayi Line | Haan, poori width leta hai | Nahi, jitni zarurat utni jagah |
| Width/Height | Set ho sakta hai | Nahi hota |
| Example | `div, p, h1-h6, section, form, ul` | `span, a, strong, em, img, input` |

**Div vs Span:**
- `div` = Block, grouping ke liye, koi default style nahi.
- `span` = Inline, chhote text ko alag style dene ke liye.

```html
<div>Ye poora block hai</div>
<p>Mera naam <span style="color:red;">Rahul</span> hai.</p>
```
**Q: DOCTYPE kyu likhte hain?**
Browser ko Standards Mode me rakhne ke liye. Bina iske Quirks Mode me galat render hoga.

**Q: Head me kya, Body me kya?**
Head me title/meta/link. Body me visible content.

**Q: Div vs Span?**
Div block hai, Span inline hai. Dono ka koi style nahi, sirf grouping ke liye.
