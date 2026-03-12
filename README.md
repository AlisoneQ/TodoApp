# TodoApp

A lightweight, cross-platform desktop **Todo application** built with React, TypeScript, and [Tauri](https://tauri.app/). Manage your daily tasks in a clean, modern dark-themed interface.

---

## Features

- **Add tasks** – Type a description and press *Add Task* to create a new item.
- **Complete tasks** – Check a task's checkbox to mark it done (strikethrough styling applied).
- **Delete tasks** – Remove individual tasks with the dedicated delete button.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | [React](https://react.dev/) | 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5 |
| Build Tool | [Vite](https://vite.dev/) | 7 |
| Styling | [TailwindCSS](https://tailwindcss.com/) | 4 |
| Desktop Runtime | [Tauri](https://tauri.app/) (Rust) | 2 |
| Linter | [ESLint](https://eslint.org/) | 9 |

---

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended) with **npm**
- [Rust toolchain](https://www.rust-lang.org/tools/install) (required by Tauri)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode

```bash
npm run tauri dev
```

This starts the Vite dev server with Hot Module Replacement (HMR) and opens a native desktop window powered by Tauri.

> **Frontend only** (no desktop window): `npm run dev` – available at `http://localhost:5173`

---

## Building for Production

```bash
npm run tauri build
```

Tauri compiles the frontend and Rust backend into a single native installer / executable for your platform (Windows, macOS, or Linux). The output is placed in `src-tauri/target/release/bundle/`.

To build the frontend bundle only (without the desktop wrapper):

```bash
npm run build
```

---

## Linting

```bash
npm run lint
```

Runs ESLint across all TypeScript / TSX source files.

---

## Project Structure

```
TodoApp/
├── src/                     # React frontend
│   ├── App.tsx              # Root component – task state & handlers
│   ├── main.tsx             # React DOM entry point
│   ├── components/
│   │   ├── AddTask.tsx      # Form for adding new tasks
│   │   ├── Task.tsx         # Individual task row (checkbox + delete)
│   │   └── TaskList.tsx     # Renders the list of Task components
│   ├── types/
│   │   └── Task.ts          # Task interface definition
│   └── styles/
│       └── App.css          # Global styles & Tailwind import
├── src-tauri/               # Tauri / Rust backend
│   ├── src/
│   │   ├── lib.rs           # Tauri app builder
│   │   └── main.rs          # Entry point
│   └── tauri.conf.json      # Tauri window & build configuration
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
└── package.json             # npm scripts & dependencies
```

---

## License

This project is open source. Feel free to use, modify, and distribute it.
