# CSS Part 4 – Display, Position, Flexbox & Grid

Is part ka focus webpage layout par hai. In concepts se navbar, cards, columns aur complete page layouts banaye jaate hain.

## Topic 1: Display Property

`display` decide karta hai ki element page par kis tarah behave karega.

```css
.block { display: block; }
.inline { display: inline; }
.inline-box { display: inline-block; }
.hidden { display: none; }
.flex-container { display: flex; }
.grid-container { display: grid; }
```

- `block`: generally new line se start hota hai aur available width leta hai.
- `inline`: same line mein rehta hai; width/height ka behavior limited hota hai.
- `inline-block`: inline ki tarah line mein, lekin width/height set kar sakte hain.
- `none`: element layout se hide ho jata hai.
- `flex`: Flexbox layout start karta hai.
- `grid`: Grid layout start karta hai.

## Topic 2: Position & z-index

`position` element ki placement control karta hai.

- `static`: default position.
- `relative`: apni normal position ke comparison mein move hota hai.
- `absolute`: nearest positioned ancestor ke according place hota hai.
- `fixed`: viewport ke according fixed rehta hai.
- `sticky`: scroll karte waqt specified point par stick ho sakta hai.

```css
.parent {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
}
```

`z-index` overlapping positioned elements ka stacking order control karta hai. Higher value generally front par hoti hai, lekin stacking context bhi matter karta hai.

## Topic 3: Flexbox

Flexbox one-dimensional layout system hai. Ek row ya ek column mein items align karne ke liye useful hai.

HTML:
```html
<div class="container">
  <div class="item">One</div>
  <div class="item">Two</div>
  <div class="item">Three</div>
</div>
```

CSS:
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
```

Important properties:
- `flex-direction`: row ya column.
- `justify-content`: main axis par alignment.
- `align-items`: cross axis par alignment.
- `flex-wrap`: items ko next line par jaane deta hai.
- `gap`: items ke beech spacing.
- `flex`: item ko available space ke hisaab se grow/shrink karne deta hai.

Center alignment ka common pattern:
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Topic 4: CSS Grid

Grid two-dimensional layout system hai. Rows aur columns dono control kar sakte hain.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

- `grid-template-columns`: columns ki width/number define karta hai.
- `grid-template-rows`: rows ki sizing define karta hai.
- `gap`: rows aur columns ke beech spacing.
- `fr`: available space ka fraction.

Responsive cards:
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
```
Isse available width ke hisaab se cards ki columns adjust ho sakti hain.

## Flexbox vs Grid

| Flexbox | Grid |
|---|---|
| One-dimensional | Two-dimensional |
| Row ya column | Rows aur columns |
| Navbar, button groups | Gallery, dashboard, page layout |

## Quick Revision

- `display` layout behavior set karta hai.
- `position: absolute` ko aksar positioned parent ke saath use karte hain.
- Flexbox = one direction mein alignment.
- Grid = rows aur columns ka layout.
- `gap` items ke beech space deta hai.
