# CSS Part 3 – Text, Box Model & Sizing

Is part mein text ko style karna, element ke around spacing samajhna aur width/height control karna seekhenge.

## Topic 1: Text & Font Properties

```css
.heading {
  color: #172554;
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  line-height: 1.4;
  letter-spacing: 1px;
}
```

Properties ka kaam:
- `color`: text ka color.
- `font-family`: text ka font.
- `font-size`: text ka size.
- `font-weight`: text ki thickness; jaise `400`, `700`, `bold`.
- `text-align`: left, center, right ya justify alignment.
- `text-decoration`: underline/overline/line-through.
- `text-transform`: uppercase, lowercase, capitalize.
- `line-height`: lines ke beech vertical spacing.
- `letter-spacing`: letters ke beech spacing.

## Topic 2: CSS Box Model

Browser har HTML element ko ek rectangular box ki tarah treat karta hai. Box Model ke 4 main parts hote hain:

1. **Content:** Actual text ya image.
2. **Padding:** Content aur border ke beech ki space.
3. **Border:** Element ke around line.
4. **Margin:** Element ke bahar ki space.

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #2563eb;
  margin: 30px;
}
```

### `box-sizing`
Default `content-box` mein width ke andar padding aur border include nahi hote. `border-box` mein width ke andar content, padding aur border include hote hain.

Isliye projects mein aksar ye reset use hota hai:
```css
* {
  box-sizing: border-box;
}
```

## Topic 3: Width, Height & Overflow

```css
.box {
  width: 300px;
  max-width: 100%;
  min-height: 150px;
  padding: 20px;
  overflow: auto;
}
```

- `width`: element ki width.
- `height`: element ki height.
- `min-width` / `min-height`: minimum size.
- `max-width` / `max-height`: maximum size.
- `overflow`: content box se bahar jaaye to kya hoga.

Overflow values:
- `visible`: content bahar dikh sakta hai.
- `hidden`: extra content hide hota hai.
- `scroll`: scrollbars dikhte hain.
- `auto`: zarurat padne par scrolling.

Responsive design mein fixed width ke saath `max-width: 100%` helpful hota hai.

## Topic 4: Border, Radius, Outline & Shadow

```css
.panel {
  border: 1px solid #cbd5e1;
  border-radius: 14px;
  outline: 2px solid transparent;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
}
```

- `border`: element ke around line.
- `border-radius`: corners round karta hai.
- `outline`: border ke bahar extra line; focus state mein useful.
- `box-shadow`: element ke peeche shadow effect.

Button example:
```css
button {
  border: none;
  border-radius: 8px;
  padding: 12px 18px;
  box-shadow: 0 5px 14px rgba(37, 99, 235, 0.2);
}
```

## Quick Revision

- Padding = andar ki spacing
- Margin = bahar ki spacing
- Border = boundary line
- `border-box` = width calculation easy banata hai
- `overflow: auto` = zarurat par scroll
- `border-radius` = rounded corners
