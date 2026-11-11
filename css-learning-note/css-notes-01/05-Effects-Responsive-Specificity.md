# CSS Part 5 – Effects, Responsive Design & Best Practices

Last part mein interactive-looking effects, responsive website banana aur CSS rules ka priority order samjhenge.

## Topic 1: Pseudo-classes

Pseudo-class kisi element ki special state ko target karti hai.

```css
button:hover {
  background: #1d4ed8;
}

input:focus {
  border-color: #7c3aed;
}

li:first-child {
  font-weight: bold;
}

li:last-child {
  color: teal;
}
```

Common pseudo-classes:
- `:hover`: mouse pointer element par aaye.
- `:focus`: element focus mein ho.
- `:active`: element activate/click state mein ho.
- `:first-child`: parent ka first child.
- `:last-child`: parent ka last child.
- `:nth-child(n)`: position ke basis par child select karta hai.

## Topic 2: Pseudo-elements

Pseudo-elements element ke kisi specific part ko style karte hain.

```css
h1::before {
  content: "★ ";
  color: orange;
}

p::first-letter {
  font-size: 28px;
  font-weight: bold;
}

input::placeholder {
  color: #94a3b8;
}
```

Common examples:
- `::before`: content se pehle generated content.
- `::after`: content ke baad generated content.
- `::first-letter`: first letter.
- `::first-line`: first line.
- `::placeholder`: input placeholder text.

## Topic 3: Transition & Transform

Transition kisi CSS property ke change ko smooth banata hai.

```css
.button {
  background: royalblue;
  transition: background 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background: navy;
  transform: translateY(-3px);
}
```

Transform element ko visually move, rotate, scale ya skew karta hai:
```css
.box {
  transform: rotate(5deg);
}

/* Other examples:
transform: scale(1.1);
transform: translateX(20px);
transform: skew(10deg);
*/
```

`transition` animation ka smooth change control karta hai; `transform` element ka visual shape/position change karta hai.

## Topic 4: CSS Variables

Variables repeated values ko ek jagah store karne ke liye use hote hain.

```css
:root {
  --primary-color: #6d28d9;
  --text-color: #172033;
  --card-radius: 14px;
}

button {
  background: var(--primary-color);
}

.card {
  color: var(--text-color);
  border-radius: var(--card-radius);
}
```

Variable name usually `--` se start hota hai aur use `var()` se karte hain.

## Topic 5: Responsive Design & Media Queries

Responsive website alag-alag screen sizes—mobile, tablet aur desktop—par achhi tarah adjust hoti hai.

HTML ke `<head>` mein viewport meta tag hona chahiye:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Media query example:
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```
Jab viewport width 768px ya usse kam hogi, grid single column ho jayegi.

Responsive tips:
- Flexible widths use karo, jaise `%`, `minmax()` aur `max-width`.
- Images par `max-width: 100%` helpful hota hai.
- Mobile par navigation aur columns ko adjust karo.
- Real device ya browser responsive mode mein test karo.

## Topic 6: Specificity & Cascade

Agar ek element par multiple CSS rules apply hon, to browser decide karta hai kaun-sa rule use hoga. Is process mein cascade, specificity aur source order matter karte hain.

General specificity order (low to high):
1. Element selector: `p`
2. Class / attribute / pseudo-class: `.note`, `[type="text"]`, `:hover`
3. ID selector: `#title`
4. Inline style ka priority normal author rules se zyada hota hai.

Example:
```css
p {
  color: gray;
}

.note {
  color: blue;
}

#message {
  color: green;
}
```
Agar same paragraph par teeno selectors match karte hain, ID selector ka rule win karega (jab origin, importance aur layer comparable hon).

`!important` priority ko affect karta hai; ise routine mein use na karo, kyunki CSS maintain karna difficult ho sakta hai.

## Topic 7: CSS Reset & Good Practices

Basic reset:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Good practices:
- External CSS file use karo.
- Meaningful class names rakho, jaise `.profile-card`.
- Repeated colors ke liye CSS variables use karo.
- CSS ko topic/section ke according organize karo.
- Mobile responsiveness test karo.
- Focus styles ko remove mat karo; keyboard users ke liye visible focus rakho.
- Unnecessary `!important` avoid karo.

## Final Practice Tasks

1. Ek profile card banao jisme image, name, description aur button ho.
2. Flexbox se navigation bar banao.
3. Grid se 3 responsive cards banao.
4. Button par hover transition add karo.
5. Media query se mobile layout adjust karo.

## Quick Revision

- Pseudo-class = special state (`:hover`, `:focus`).
- Pseudo-element = element ka specific part (`::before`, `::after`).
- Transition = smooth property change.
- Transform = move/rotate/scale.
- CSS variable = reusable value.
- Media query = screen size ke hisaab se styling.
- Specificity = matching CSS rules ki priority.
