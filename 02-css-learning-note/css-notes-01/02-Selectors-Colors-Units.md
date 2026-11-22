# CSS Part 2 – Selectors, Colors & Units

Is part mein seekhenge ki HTML elements ko target kaise karte hain, colors kaise dete hain aur size ke liye kaun-si units use hoti hain.

## Topic 1: CSS Selectors

Selectors browser ko batate hain ki kaun-se HTML elements style karne hain.

### Element selector
Same HTML tag ke sabhi matching elements select karta hai.
```css
p {
  color: #334155;
}
```

### Class selector
Class ko dot `.` se target karte hain. Ek class multiple elements par use ho sakti hai.
```html
<p class="note">First note</p>
<p class="note">Second note</p>
```
```css
.note {
  color: teal;
}
```

### ID selector
ID ko hash `#` se target karte hain. Ek page par ID ko unique rakhna best practice hai.
```html
<h1 id="main-title">My Website</h1>
```
```css
#main-title {
  color: navy;
}
```

### Universal selector
`*` page ke sabhi elements ko target karta hai.
```css
* {
  box-sizing: border-box;
}
```

### Grouping selector
Comma se multiple selectors ko ek saath style kar sakte hain.
```css
h1, h2, p {
  font-family: Arial, sans-serif;
}
```

### Descendant aur Child selector
Descendant selector parent ke andar kahin bhi present matching element ko target karta hai. Child selector sirf direct child ko target karta hai.
```css
.card p {
  color: gray;
}

.card > p {
  font-weight: bold;
}
```

### Attribute selector
Kisi attribute ke basis par element select karta hai.
```css
input[type="email"] {
  border-color: blue;
}
```

## Topic 2: CSS Colors

CSS mein colors dene ke common methods:

```css
h1 { color: red; }                 /* Named color */
p { color: #2563eb; }              /* HEX */
div { color: rgb(37, 99, 235); }    /* RGB */
span { color: rgba(0, 0, 0, 0.5); }/* RGBA with opacity */
```

- `color` text ka color set karta hai.
- `background-color` element ka background set karta hai.
- HEX format `#RRGGBB` hota hai.
- RGB mein red, green, blue ki values 0 se 255 tak hoti hain.
- RGBA mein last value transparency/opacity control karti hai.

## Topic 3: Background Properties

```css
.hero {
  background-color: #eff6ff;
  background-image: url("banner.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

- `background-color`: background ka color.
- `background-image`: background mein image.
- `background-repeat`: image repeat hogi ya nahi.
- `background-position`: image ki position.
- `background-size: cover`: container ko cover karne ke liye image scale hoti hai.

Shortcut:
```css
.hero {
  background: #eff6ff url("banner.jpg") center / cover no-repeat;
}
```

## Topic 4: CSS Units

| Unit | Meaning | Common use |
|---|---|---|
| `px` | Fixed CSS pixel unit | Border, small fixed sizes |
| `%` | Parent ke comparison mein | Width |
| `em` | Current element ke font size ke relative | Text-related sizing |
| `rem` | Root (`html`) font size ke relative | Consistent spacing/font |
| `vw` | Viewport width ka 1% | Responsive width |
| `vh` | Viewport height ka 1% | Screen-height sections |

Example:
```css
html {
  font-size: 16px;
}

.box {
  width: 80%;
  padding: 1rem;
  min-height: 30vh;
}
```

## Quick Revision

- `.class` = class selector
- `#id` = ID selector
- `*` = universal selector
- `color` = text color
- `background-color` = background color
- `rem` root font size par based hota hai
- `%` parent/container ke size ke relative hota hai
