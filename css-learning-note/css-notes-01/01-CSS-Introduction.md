# CSS Part 1 – Introduction & Basic Concepts

Is part mein CSS ka basic foundation samjhenge. Pehle ye concepts clear kar lo, phir styling karna easy ho jayega.

## Topic 1: CSS kya hai?

CSS ka full form **Cascading Style Sheets** hai. HTML webpage ka structure banata hai, jabki CSS us webpage ko design aur attractive look deta hai.

CSS se hum:
- Text ka color, size aur font change kar sakte hain.
- Background color ya image laga sakte hain.
- Elements ke beech spacing set kar sakte hain.
- Layout ko mobile aur desktop ke according adjust kar sakte hain.
- Buttons, cards, forms aur navigation bars design kar sakte hain.

Example:
```html
<h1 class="heading">Welcome to CSS</h1>
```
```css
.heading {
  color: blue;
  font-size: 32px;
  text-align: center;
}
```
Yahan `color` text ka rang badalta hai, `font-size` text ka size aur `text-align` alignment set karta hai.

## Topic 2: CSS Syntax

CSS rule ke mainly 3 parts hote hain:
- **Selector:** Kis HTML element ko style karna hai.
- **Property:** Kya change karna hai.
- **Value:** Property ki kya setting hogi.

```css
p {
  color: green;
  font-size: 18px;
}
```
`p` selector hai, `color` aur `font-size` properties hain, aur `green` aur `18px` values hain. Har declaration ke end mein semicolon `;` lagana good practice hai.

## Topic 3: CSS add karne ke 3 methods

### 1. Inline CSS
HTML tag ke andar `style` attribute likhte hain.
```html
<p style="color: red;">Hello World</p>
```
Small testing ke liye useful hai, lekin bade projects mein avoid karna chahiye.

### 2. Internal CSS
HTML file ke `<head>` section mein `<style>` tag ke andar CSS likhte hain.
```html
<head>
  <style>
    h1 {
      color: purple;
    }
  </style>
</head>
```
Single-page demo ke liye useful hai.

### 3. External CSS
CSS ko separate `.css` file mein likhte hain aur HTML se connect karte hain.
```html
<link rel="stylesheet" href="style.css">
```
Real projects ke liye ye recommended method hai, kyunki HTML aur CSS alag rehte hain.

## Topic 4: CSS Comments

Comments browser mein design ka part nahi bante. Ye code samjhane ya temporary note likhne ke kaam aate hain.

```css
/* This is a CSS comment */
h1 {
  color: navy;
}
```

## Quick Revision

- HTML = Structure
- CSS = Styling and layout
- Selector = Target element
- Property = Kya style karna hai
- Value = Kaise style karna hai
- External CSS = Separate CSS file, generally best for projects
