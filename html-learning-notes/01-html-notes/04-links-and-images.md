# 04. Links & Images

## 4.1 Links — `<a>` Tag

```html
<a href="https://google.com" target="_blank" rel="noopener">Google</a>
<a href="#about">About Section pe jao</a>
<a href="mailto:hello@gmail.com">Mail Karo</a>
<a href="tel:+919999999999">Call Karo</a>
<a href="resume.pdf" download>Resume Download</a>
```

| Attribute | Kaam |
|---|---|
| `href` | Kahan jana hai — bina iske link kaam nahi karega |
| `target="_blank"` | Naye tab me kholega |
| `rel="noopener"` | Security. `_blank` ke saath hamesha lagao. Nayi tab purani tab ko control na kar sake. |
| `download` | File download karwayega |

### Absolute vs Relative Path
- **Absolute:** `https://site.com/image.jpg` — Poora URL
- **Relative:** `images/photo.jpg` — Apni file ke hisaab se rasta. Project me hamesha relative use karo.

### Anchor Link — Same Page Me Jump
```html
<a href="#about">About pe jao</a>
<!-- ... neeche ... -->
<section id="about">About Section</section>
```

## 4.2 Images — `<img>` Tag

```html
<img src="images/profile.jpg" alt="Rahul ki photo" width="300" height="300" loading="lazy">
```

| Attribute | Kaam |
|---|---|
| `src` | Image ka rasta |
| `alt` | SABSE IMPORTANT. Image na khule to ye text dikhega + Screen reader isi ko padhega + Google isi se image samajhta hai. Kabhi khaali mat chhodo. |
| `width` / `height` | Layout shift rokne ke liye — jagah pehle se reserve ho jati hai. |
| `loading="lazy"` | Scroll karne pe hi load hogi. Page fast hoga. |

### Figure + Figcaption
```html
<figure>
  <img src="project.png" alt="Mera project">
  <figcaption>Fig 1: Mera College Project</figcaption>
</figure>
```
Image + Caption ko ek saath rakhne ka semantic tarika.

**Q: alt khaali kyu nahi chhodna?**
Accessibility + SEO ke liye. Screen reader user ko image ka matlab alt se hi pata chalta hai.

**Q: target=_blank ke saath rel=noopener kyu?**
Security — nayi tab `window.opener` se purani tab ko hijack kar sakti hai.
