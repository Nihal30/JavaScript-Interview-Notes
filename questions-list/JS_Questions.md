# 🚀 JavaScript Interview Preparation List

A comprehensive collection of JavaScript questions covering basics to advanced patterns.

---

## 📑 Table of Contents
* [Basics](#-basics)
* [Scope & Closures](#-scope--closures)
* [Objects & Prototypes](#-objects--prototypes)
* [Async JavaScript](#-async-javascript)
* [Performance & Patterns](#-performance--patterns)
* [Browser APIs](#-browser-apis)

---

## 🟢 Basics
- [ ] 1. What is the difference between `var`, `let`, and `const`?
- [ ] 2. What is hoisting in JavaScript?
- [ ] 3. What is the Temporal Dead Zone?
- [ ] 4. What is the difference between `==` and `===`?
- [ ] 5. What is `typeof null` and why?
- [ ] 6. What is `NaN` and why is `NaN !== NaN`?
- [ ] 7. What happens when you add `[] + []`?
- [ ] 8. What happens when you compare two arrays with `===`?
- [ ] 9. What is strict mode in JavaScript?
- [ ] 10. What is an IIFE and why is it used?

## 🟡 Scope & Closures
- [ ] 1. What is lexical scope?
- [ ] 2. What are closures?
- [ ] 3. Give a practical use case of closures.
- [ ] 4. What is block scope?
- [ ] 5. What is function scope?
- [ ] 6. How does scope chain work?
- [ ] 7. What problems do closures solve?
- [ ] 8. What are common pitfalls of closures?
- [ ] 9. How are closures used in event handlers?
- [ ] 10. How are closures used in module patterns?

## 🟠 Objects & Prototypes
- [ ] 1. What is a prototype in JavaScript?
- [ ] 2. Explain prototypal inheritance.
- [ ] 3. What is `Object.create()`?
- [ ] 4. What is the difference between `class` and prototype inheritance?
- [ ] 5. What is the difference between `Object.keys`, `values`, and `entries`?
- [ ] 6. What does `Object.freeze` do?
- [ ] 7. What does `Object.seal` do?
- [ ] 8. What is `Object.defineProperty`?
- [ ] 9. What are property descriptors?
- [ ] 10. What is the difference between `Map` and `Object`?

## 🔵 Async JavaScript
- [ ] 1. What is the event loop?
- [ ] 2. What is the call stack?
- [ ] 3. What are microtasks and macrotasks?
- [ ] 4. What are Promises?
- [ ] 5. What is promise chaining?
- [ ] 6. What is async/await?
- [ ] 7. What is `Promise.all`?
- [ ] 8. What is `Promise.race`?
- [ ] 9. What is `Promise.allSettled`?
- [ ] 10. What is `Promise.any`?

## 🟣 Performance & Patterns
- [ ] 1. What is debouncing?
- [ ] 2. What is throttling?
- [ ] 3. How would you implement debounce?
- [ ] 4. How would you implement throttle?
- [ ] 5. What is memoization?
- [ ] 6. What are higher order functions?
- [ ] 7. What is currying?
- [ ] 8. What is function composition?
- [ ] 9. What is lazy evaluation?
- [ ] 10. What causes memory leaks in JavaScript apps?

## 🔴 Browser APIs
- [ ] 1. What is the DOM?
- [ ] 2. What is event bubbling?
- [ ] 3. What is event capturing?
- [ ] 4. What is event delegation?
- [ ] 5. What does `stopPropagation` do?
- [ ] 6. What does `preventDefault` do?
- [ ] 7. What is `localStorage` vs `sessionStorage`?
- [ ] 8. What are cookies?
- [ ] 9. What is CORS?
- [ ] 10. What is the same-origin policy?

## 🏗️ Memory & Internals
- [ ] 1. How does the **V8 Garbage Collector** work (Mark-and-Sweep)?
- [ ] 2. What are **Memory Leaks** and how do you find them using Chrome DevTools?
- [ ] 3. What is the difference between **Stack** and **Heap** memory?
- [ ] 4. What are **WeakMap** and **WeakSet**, and why do they help prevent memory leaks?
- [ ] 5. Explain **Tail Call Optimization** (TCO).
- [ ] 6. How does the **Just-In-Time (JIT) Compiler** optimize JS at runtime?

## 🧩 Advanced Patterns & Functional Programming
- [ ] 1. What are **Pure Functions** and why are they important in modern frameworks?
- [ ] 2. Explain **Function Composition** and how to implement a `pipe` function.
- [ ] 3. What is the difference between **Imperative** and **Declarative** programming?
- [ ] 4. What is **Currying** and how is it different from **Partial Application**?
- [ ] 5. What are **Generators** (`function*`) and where are they useful (e.g., Redux-Saga)?
- [ ] 6. How do **Proxies** and **Reflect** work (The backbone of Vue 3 reactivity)?
- [ ] 7. What are **Symbols** and how do you use them for private object properties?

## 🌐 Modern Web & Workers
- [ ] 1. What are **Web Workers** and when should you use them vs. Async code?
- [ ] 2. What are **Service Workers** and how do they enable PWA offline capabilities?
- [ ] 3. Explain **Tree Shaking** and how it reduces bundle size.
- [ ] 4. What is the difference between **CJS (CommonJS)** and **ESM (ES Modules)**?
- [ ] 5. How does **Cross-Site Scripting (XSS)** and **CSRF** work in JS, and how do you prevent them?

## ⚡ Performance & Optimization
- [ ] 1. What is the difference between **Reflow** and **Repaint**?
- [ ] 2. How would you optimize a page rendering **10,000 DOM elements**?
- [ ] 3. What is **Critical Rendering Path** optimization?
- [ ] 4. Explain **Code Splitting** and **Dynamic Imports** (`import()`).

---

## 💻 Practical Coding Challenges (Must-Know)
*Be prepared to code these from scratch on a whiteboard or shared editor.*

- [ ] 1. **Implement a Custom Promise:** Show the internal states (Pending, Fulfilled, Rejected).
- [ ] 2. **Polyfill for `Array.prototype.reduce`:** Demonstrates understanding of prototypes and accumulators.
- [ ] 3. **Deep Clone Function:** Create a function that copies nested objects/arrays without using `JSON.stringify`.
- [ ] 4. **Flatten an Array:** Write a recursive function to flatten `[1, [2, [3, 4]], 5]`.
- [ ] 5. **Simple EventEmitter:** Create a class with `on`, `emit`, and `off` methods.
- [ ] 6. **Task Scheduler:** Implement a class that limits the number of concurrent asynchronous tasks.