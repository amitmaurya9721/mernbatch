# 06. DOM Manipulation & Events

## 1. DOM Kya Hai?
DOM ka full form Document Object Model hai. Browser HTML document ko tree of objects ke form mein represent karta hai. JavaScript DOM ke through page content, structure aur styles ko access/change kar sakta hai.

## 2. Selecting Elements
```js
document.getElementById("title");
document.getElementsByClassName("card");
document.getElementsByTagName("p");
document.querySelector(".container");
document.querySelectorAll(".item");
```
`querySelector()` first matching element deta hai; `querySelectorAll()` matching elements ka NodeList deta hai.

## 3. Content and Style Change
```js
const heading = document.querySelector("h1");
heading.textContent = "Welcome";
heading.style.color = "blue";
```

- `textContent`: text content read/write karta hai.
- `innerText`: rendered/visible text ko represent karta hai.
- `innerHTML`: HTML markup read/write karta hai. Untrusted input ke saath use karne se XSS risk ho sakta hai.

## 4. Create and Remove Elements
```js
const para = document.createElement("p");
para.textContent = "Learning JavaScript";
document.body.appendChild(para);

para.remove();
```

## 5. Events
Event browser mein hone wali action/occurrence hai, jaise click, key press, input ya form submit.

Common events:
- `click`
- `input`
- `change`
- `submit`
- `keydown`
- `keyup`
- `mouseover`

### addEventListener()
```js
const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log("Button clicked");
  console.log(event.target);
});
```

## 6. Event Bubbling and Capturing
- Bubbling: event target se parent ki taraf travel karta hai.
- Capturing: event outer ancestors se target ki taraf travel karta hai.

## 7. Event Delegation
Parent par listener lagakar child elements ke events handle karna event delegation hai. Dynamic lists mein useful hai.

```js
document.querySelector("ul").addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    console.log(event.target.textContent);
  }
});
```

## 8. Forms
Form submit handle karte waqt `preventDefault()` browser ka default submit/reload behavior rok sakta hai.

```js
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  console.log(email);
});
```

## Quick Revision
- DOM browser ka document representation hai.
- `addEventListener()` events handle karta hai.
- Event delegation multiple child elements ke liye useful hai.
- User input ko safely handle karein; untrusted content ko raw `innerHTML` mein na daalein.
