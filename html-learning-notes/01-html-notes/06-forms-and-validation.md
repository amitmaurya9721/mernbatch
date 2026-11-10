# 06. Forms & Validation — SABSE IMPORTANT CHAPTER

> Interview me sabse zyada questions yahi se aate hain. Ise halke me mat lena.

## 6.1 Basic Form

```html
<form action="/submit" method="POST">
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" placeholder="Apna naam likho" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Submit</button>
</form>
```

## 6.2 Label — Sabse Underrated Tag

```html
<!-- SAHI -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- GALAT: Sirf placeholder pe bharosa -->
<input type="email" placeholder="Email">
```
**Kyu?** Label pe click karne se input focus hota hai + Screen reader ko pata chalta hai field kis cheez ka hai. Placeholder type karte hi gayab ho jata hai, label nahi.

## 6.3 Input Types — Sab Yaad Rakho

| Type | Kaam |
|---|---|
| `text` | Normal text |
| `email` | Email format check karega |
| `password` | Dots me dikhega |
| `number` | Sirf number + up/down arrows |
| `tel` | Phone — mobile keyboard kholega |
| `date`, `time`, `month` | Calendar / Time picker |
| `color` | Color picker |
| `range` | Slider |
| `checkbox` | Ek se zyada select ho sakta hai |
| `radio` | Ek hi select hoga (same `name` hona chahiye) |
| `file` | File upload |
| `hidden` | Dikhega nahi, data jayega |
| `submit` / `reset` | Bhejna / Saaf karna |

## 6.4 Radio vs Checkbox

```html
<p>Gender:</p>
<label><input type="radio" name="gender" value="male"> Male</label>
<label><input type="radio" name="gender" value="female"> Female</label>

<p>Skills:</p>
<label><input type="checkbox" name="skill" value="html"> HTML</label>
<label><input type="checkbox" name="skill" value="css"> CSS</label>
```
**1 Line:** Radio = Ek hi chunna hai. Checkbox = Ek se zyada chun sakte ho.
**Rule:** Radio ka `name` same hona CHAHIYE, warna sab alag group ban jayenge.

## 6.5 Select, Textarea, Fieldset

```html
<label for="city">City:</label>
<select id="city" name="city">
  <option value="">-- Select --</option>
  <option value="prayagraj">Prayagraj</option>
  <option value="delhi">Delhi</option>
</select>

<label for="msg">Message:</label>
<textarea id="msg" name="msg" rows="4"></textarea>

<fieldset>
  <legend>Personal Details</legend>
  <!-- inputs -->
</fieldset>
```

## 6.6 Validation — Bina JS Ke

| Attribute | Kaam |
|---|---|
| `required` | Khali nahi chhod sakte |
| `minlength` / `maxlength` | Password 8 se kam nahi |
| `min` / `max` | Number/date ki limit |
| `pattern="[0-9]{10}"` | Regex — jaise 10 digit mobile |
| `type="email"` | Khud email check karega |
| `disabled` | Band hai, data nahi jayega |
| `readonly` | Dekh sakte ho, badal nahi sakte, data jayega |
| `autocomplete="on"` | Browser purana data suggest karega |

## 6.7 GET vs POST — Pakka Question

| | GET | POST |
|---|---|---|
| Data kahan | URL me dikhta hai `?name=rahul` | Body me chhupa hota hai |
| Security | Kam — password kabhi GET se mat bhejo | Zyada safe |
| Limit | URL ki limit | Bada data bhej sakte ho |
| Kab | Search, Filter | Login, Signup, Payment |

## 6.8 id vs name vs value

| | Kaam |
|---|---|
| `id` | Label ko jodne + CSS/JS ke liye (Unique) |
| `name` | Server ko data bhejne ke liye (Bina name ke data nahi jayega) |
| `value` | Jo data jayega |

**Q: button vs input type=submit?**
button ke andar HTML (icon/text) daal sakte ho, input me nahi.

**Q: disabled vs readonly?**
Disabled ka data server pe nahi jata, readonly ka jata hai.

**Q: Placeholder label ki jagah le sakta hai?**
Nahi. Placeholder gayab ho jata hai, accessibility me fail hai.