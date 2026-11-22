# 07. Asynchronous JavaScript, Promises & Fetch API

## 1. Synchronous vs Asynchronous
- Synchronous: statements normally order mein execute hoti hain; current operation complete hone ke baad next statement.
- Asynchronous: kuch operations background/runtime handling ke through baad mein complete hote hain; baaki code aage chal sakta hai.

```js
console.log("First");
setTimeout(() => console.log("Second"), 1000);
console.log("Third");

// First, Third, Second
```

## 2. Callback
Callback ek function hai jo doosre function ko argument ke roop mein diya jata hai.

```js
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Amit", () => console.log("Welcome"));
```

Nested callbacks bahut complex ho jayein to use callback hell kaha jata hai.

## 3. Promise
Promise asynchronous operation ke future result ko represent karta hai.

States:
1. Pending
2. Fulfilled
3. Rejected

```js
const task = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Completed");
  else reject(new Error("Failed"));
});

task
  .then(result => console.log(result))
  .catch(error => console.log(error.message))
  .finally(() => console.log("Finished"));
```

Useful Promise methods:
- `Promise.all()` – all fulfill hon to results; ek reject ho to reject.
- `Promise.allSettled()` – sabke settled results deta hai.
- `Promise.race()` – first settled promise ka result.
- `Promise.any()` – first fulfilled promise; sab reject hon to reject.

## 4. Async/Await
`async` function Promise return karta hai. `await` Promise settle hone tak async function ke next step ko pause karta hai.

```js
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function showData() {
  const result = await getData();
  console.log(result);
}

showData();
```

## 5. Error Handling with try/catch
```js
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
}
loadUsers();
```

## 6. Fetch API
Fetch API HTTP request bhejne aur response receive karne ke liye use hoti hai. `fetch()` Promise return karta hai. HTTP 404/500 par Promise automatically reject nahi hota; `response.ok` check karein.

### GET
```js
const response = await fetch("/api/users");
const data = await response.json();
```

### POST
```js
const response = await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Amit" })
});
```

## 7. JSON
JSON = JavaScript Object Notation. Frontend aur backend ke beech data exchange ka common format hai.

```js
const user = { name: "Amit", age: 21 };
const jsonString = JSON.stringify(user);
const objectAgain = JSON.parse(jsonString);
```

- `JSON.stringify()` – JavaScript value to JSON string.
- `JSON.parse()` – JSON string to JavaScript value.

## 8. Error Handling
`try` risky code run karta hai, `catch` error handle karta hai, `finally` cleanup code ke liye use hota hai. `throw new Error()` custom error throw karta hai.

## Quick Revision
- Promise asynchronous result represent karta hai.
- `async/await` Promise-based code ko readable banata hai.
- Fetch response mein `response.ok` check karna important hai.
- JSON API data exchange mein common hai.
