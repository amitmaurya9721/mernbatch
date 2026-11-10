# 01. Introduction — HTML Kya Hai?

## 1.1 HTML Kya Hai?
**HTML = HyperText Markup Language**

- **HyperText** = Ek page se dusre page pe jump karne wala text (Links ke through)
- **Markup** = Tags se content ko label karna
- Ye **Programming Language NAHI** hai. Isme logic, loop, if-else nahi hote. Ye sirf **Structure** banata hai.

> NOTE: *"HTML structure deta hai, CSS usko sundar banata hai, JS usko zinda karta hai."*

## 1.2 HTML vs CSS vs JS

| Language | Kaam | Example |
|---|---|---|
| **HTML** | Skeleton / Structure | Heading, Para, Form, Table |
| **CSS** | Skin / Styling | Color, Font, Layout, Spacing |
| **JS** | Brain / Behaviour | Click pe popup, Validation, Dynamic Data |

## 1.3 Browser HTML Ko Kaise Samajhta Hai?
1. Browser HTML ko top se bottom padhta hai.
2. Tags ko parse karke **DOM Tree** banata hai.
3. Fir CSS + JS ke saath page render karta hai.

**DOM = Document Object Model.** Har tag ek Node hai. JS aage jaake isi DOM ko change karta hai.

## 1.4 Tag vs Element vs Attribute

```html
<p class="intro">Hello</p>

| Term | Kya Hai | Example |
|---|---|---|
| **Tag** | Opening / Closing wala part | `<p>` , `</p>` |
| **Element** | Tag + Content + Attribute = Poora | `<p class="intro">Hello</p>` |
| **Attribute** | Tag ko extra info | `class="intro"` |
| **Content** | Andar ka text | `Hello` |

**Rule:** Attribute hamesha `name="value"` me likha jata hai.

## 1.5 Void / Empty Elements
Jinka closing tag nahi hota:

```html
<br> <hr> <img> <input> <link> <meta>
```

## 1.6 HTML5 Kya Hai?
HTML ka latest version. Isme aaya:
- Semantic tags: `header, nav, section, article`
- Native `<audio>`, `<video>`
- Naye input types: `email, date, range, color`
- Canvas, Local Storage

HTML4 me ye sab ke liye Flash / Plugin chahiye tha.

## 1.7 Example

```html
<p>Hello, Main HTML seekh raha hoon.</p>