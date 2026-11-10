# 05. Tables & Media

## 5.1 Tables — Sirf Data Ke Liye, Layout Ke Liye NAHI

```html
<table>
  <caption>Student Marks</caption>
  <thead>
    <tr><th scope="col">Name</th><th scope="col">Marks</th></tr>
  </thead>
  <tbody>
    <tr><td>Rahul</td><td>85</td></tr>
    <tr><td>Priya</td><td>92</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Average</td><td>88.5</td></tr>
  </tfoot>
</table>
```

| Tag | Kaam |
|---|---|
| `<table>` | Poori table |
| `<caption>` | Table ka title — screen reader ke liye zaruri |
| `<thead> / <tbody> / <tfoot>` | Header / Body / Footer |
| `<tr>` | Table Row |
| `<th>` | Table Heading — bold + center by default. `scope="col"` ya `scope="row"` lagao. |
| `<td>` | Table Data |
| `colspan="2"` | 2 columns merge |
| `rowspan="2"` | 2 rows merge |

> Interview Line: *"Table layout ke liye use karna 2005 ki galti hai. Ab layout CSS Flexbox/Grid se banta hai."*

## 5.2 Media — Audio & Video

```html
<video controls width="600" poster="thumb.jpg">
  <source src="demo.mp4" type="video/mp4">
  <source src="demo.webm" type="video/webm">
  Aapka browser video support nahi karta.
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

| Attribute | Kaam |
|---|---|
| `controls` | Play/Pause dikhayega — bina iske video chalega nahi |
| `autoplay` | Khud chalega (browser aksar mute ke saath hi allow karta hai) |
| `muted` | Awaaz band |
| `loop` | Baar-baar chalega |
| `poster` | Video se pehle dikhne wali thumbnail |
| `<source>` | Ek se zyada format do taaki har browser me chale |

## 5.3 Iframe — Dusri Site Apne Page Me

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Demo Video"></iframe>
```
`title` dena mat bhoolna — screen reader ke liye zaruri hai.

**Q: Table ka use layout ke liye kyu nahi?**
Kyunki wo slow, non-responsive aur accessibility me kharab hai. Layout CSS se, data table se.

**Q: Video me controls na ho to?**
Video dikhega par user play nahi kar payega.
