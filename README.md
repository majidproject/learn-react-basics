# 🎯 W03-S01 — React Basics: Components, Props & State

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Project Status:** Completed W03-S01 (React Fundamentals)

This project marks the beginning of the **React** section in the 12-Month Full-Stack Learning Roadmap.  
The focus of **W03-S01** was understanding **Components**, **Props**, and **State** — the foundational building blocks of every React application.

---

## ✨ Live Demo (Optional)

> _Add a link to your deployed demo here after uploading to GitHub Pages or Vercel._

---

## 📚 Key Learning Objectives

| Concept | Description |
| :--- | :--- |
| **Component** | Reusable UI building blocks written as functions returning JSX. |
| **JSX** | A blend of HTML and JavaScript syntax used to describe UI elements. |
| **State (`useState`)** | Manages dynamic data inside a component; React re-renders only affected parts when it changes. |
| **Props** | External data or configuration passed from parent to child components. |
| **Parent–Child Interaction** | Demonstrates how child components can trigger parent state updates via props callbacks. |

---

## 💻 Implemented Exercises

1. **Counter** — Interactive counter using `useState`.
2. **Tabs** — Multi-section UI using both `state` (active tab) and `props` (tab labels/content).
3. **Parent–Child Interaction** — Passing callbacks through props to modify parent state.

---

## ⚖️ Props vs. State Summary

| Feature | State | Props |
| :--- | :--- | :--- |
| Ownership | Internal (managed by component) | External (received from parent) |
| Mutability | Mutable via `setState` | Immutable (read-only) |
| Purpose | Manage internal dynamic data | Configure child components |
| Example | Counter value | Message text |

🧠 **Remember:**  
> Props are like *function parameters*, while State is like a *component’s memory*.

---

## ✅ Definition of Done (DoD)

- [x] Project scaffolded with **Vite + React 18**  
- [x] Three core components: `Counter`, `Tabs`, `Message`  
- [x] Props and State implemented in practice  
- [x] Ready for next session — `useEffect` and React Hooks Advanced

---

## 🚀 How to Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧠 Developer Notes

This session was essential for transitioning from static DOM manipulation to **declarative UI thinking**.  
React’s `useState` and `props` mechanisms allow predictable and component-driven UI updates — the backbone of modern front-end development.

---

## 👤 Author

Created with ❤️ by **Majid Mansouri**  
Part of the *12-Month Full-Stack Learning Roadmap*

| Resource | Link |
| :--- | :--- |
| 🌐 **Portfolio** | [majidproject.github.io/web-portfolio](https://majidproject.github.io/web-portfolio) |
| 🔗 **LinkedIn** | [linkedin.com/in/majid-mansouri-a8163866](https://www.linkedin.com/in/majid-mansouri-a8163866) |
| 📧 **Email** | [mm.project.8902@gmail.com](mailto:mm.project.8902@gmail.com) |

> “Every re-render is a reminder that growth is a process — in code and in life.”
