# Top 15 JavaScript Interview Questions

Short, interview-ready answers in simple Hinglish.

## 1. What is JavaScript?
JavaScript ek dynamically typed programming language hai jo web pages ko interactive banati hai. React aur Node.js ke through frontend aur backend dono mein use hoti hai.

## 2. Difference between var, let and const?
`var` function-scoped hai; `let` aur `const` block-scoped hain. `let` reassign ho sakta hai, `const` binding reassign nahi hoti. Same scope mein `var` redeclare ho sakta hai, `let`/`const` nahi.

## 3. Difference between == and ===?
`==` comparison ke waqt type coercion kar sakta hai; `===` type aur value dono strict compare karta hai. Usually `===` use karna better hai.

## 4. What is hoisting?
JavaScript declarations ko execution se pehle process karta hai. `var` undefined se initialize hota hai; `let`/`const` initialization se pehle TDZ mein rehte hain.

## 5. What is closure?
Closure mein inner function outer lexical scope ke variables ko access/remember kar sakta hai, even after outer function return ho gaya ho.

## 6. Difference between null and undefined?
`undefined` usually unassigned/missing value show karta hai. `null` intentionally empty value represent karta hai.

## 7. What is an arrow function?
Arrow function ES6 ka concise function syntax hai. Iska apna `this` aur `arguments` nahi hota; ye outer lexical scope se `this` leta hai.

## 8. Difference between map() and filter()?
`map()` har element ko transform karke new array deta hai. `filter()` condition pass karne wale elements ka new array deta hai.

## 9. What is DOM?
DOM browser mein HTML document ka object-tree representation hai. JavaScript iske elements, content aur styles ko change kar sakta hai.

## 10. What is event bubbling?
Event bubbling mein event target element se uske parent ancestors ki taraf propagate karta hai.

## 11. What is a Promise?
Promise asynchronous operation ka future result represent karta hai. Iski states pending, fulfilled aur rejected hoti hain.

## 12. What is async/await?
Async/await Promises handle karne ka readable syntax hai. `async` function Promise return karta hai aur `await` Promise result ka wait karta hai.

## 13. What is the Event Loop?
Event Loop call stack aur queued asynchronous callbacks ke execution ko coordinate karta hai. Microtasks, jaise Promise callbacks, generally tasks/timer callbacks se pehle process hote hain.

## 14. Difference between localStorage and sessionStorage?
`localStorage` data browser sessions ke across persist karta hai jab tak remove na ho. `sessionStorage` data current tab ke page session tak rakhta hai. Dono strings store karte hain.

## 15. Why is JavaScript important in MERN?
JavaScript React frontend, Node.js runtime aur Express backend mein use hoti hai. MongoDB ke saath Node/Mongoose ke through data operations bhi JavaScript se likhe ja sakte hain.
