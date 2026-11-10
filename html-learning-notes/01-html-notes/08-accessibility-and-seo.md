# 08. Accessibility & SEO
## 8.1 Accessibility (a11y) — Sabke Liye Website

| Rule | Kaise Karein |
|---|---|
| **Alt Text** | Har meaningful image pe `alt` likho. Decorative image pe `alt=""` (khaali) taaki screen reader skip kare. |
| **Label** | Har input ke saath `<label>` jodo. |
| **Heading Order** | `h1 → h2 → h3` order me jao. `h1` ke baad `h3` mat kudo. |
| **Contrast** | Halke grey text pe white background mat rakho. |
| **Keyboard** | Sab kuch Tab key se chalna chahiye, bina mouse ke. |
| **Focus Visible** | Focus pe `outline: none` mat hatao bina alternative ke. |
| **Lang Attribute** | `<html lang="en">` ya `lang="hi"` zarur likho. |
| **ARIA** | Jab HTML tag kaafi na ho tabhi. Ex: `<button aria-label="Menu band karo">X</button>` |

**Screen Reader kya hai?** Wo software jo blind/low-vision users ke liye page ko bol ke sunata hai. Wo design nahi, sirf HTML structure padhta hai. Isliye semantic + alt + label itne important hain.

## 8.2 SEO — Google Ko Page Samjhana

```html
<head>
  <title>Student Portfolio | Rahul — Fresher Web Developer</title>
  <meta name="description" content="Rahul ka portfolio — HTML, CSS projects aur college registration form.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

| SEO Factor | Kaise |
|---|---|
| **Title** | 50-60 characters, main keyword aage |
| **Meta Description** | 150-160 characters, click karne layak |
| **Heading Hierarchy** | 1x `h1`, fir `h2`, fir `h3` |
| **Alt Text** | Image search se traffic isi se aata hai |
| **Semantic Tags** | `main`, `article` Google ko structure batate hain |
| **Mobile Friendly** | Viewport meta + responsive |
| **Fast Load** | `loading="lazy"`, chhoti images |
