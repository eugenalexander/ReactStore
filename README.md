# 🛒 ReactStore

A full-stack product management application built with a modern **React + TypeScript** frontend and a robust **.NET 9 Web API** backend.

---

## 📁 Project Structure

```
ReactStore/
├── Client/               → React + Vite frontend with Material UI
└── ReactStore/           → .NET 9 Web API backend (.sln solution)
    └── ReactStore.sln
```

---

## 🌐 Client (React + TypeScript)

**Path:** `ReactStore/Client`

### ⚙️ Stack

- [React 19 (RC)](https://reactjs.org/)
- [Vite](https://vitejs.dev/) – lightning-fast dev server & bundler
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/) (MUI v7)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) – schema-based validation
- [Redux Toolkit](https://redux-toolkit.js.org/)
- Stripe integration

### 📦 Plugins & Dependencies

#### Main Dependencies

- `@emotion/react`, `@emotion/styled` – MUI styling
- `@fontsource/roboto` – default MUI font
- `@hookform/resolvers` – resolver bridge for Zod
- `@mui/material`, `@mui/icons-material`, `@mui/lab` – Material UI v7
- `@reduxjs/toolkit` – Redux logic & slices
- `@stripe/react-stripe-js`, `@stripe/stripe-js` – Stripe payments
- `date-fns` – modern date utility
- `js-cookie` – cookie management
- `react`, `react-dom` – React 19
- `react-dropzone` – drag & drop file uploads
- `react-hook-form` – lightweight forms
- `react-redux` – binding for Redux
- `react-router-dom` – routing (v7)
- `react-toastify` – toast notifications
- `zod` – form & schema validation

#### Dev Dependencies

- `vite`, `@vitejs/plugin-react-swc` – development & production builds
- `typescript`, `@types/react`, `@types/react-dom` – TypeScript typings
- `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` – linting
- `vite-plugin-mkcert` – HTTPS via local certificates
- `@eslint/js`, `typescript-eslint` – modern linting config
- `@types/js-cookie` – type support for js-cookie

### 🚀 Getting Started (Client)

```bash
cd ReactStore/Client
npm install
npm run dev
```

Access the app at: `http://localhost:5173` (default Vite port)

---

## 🔧 API (.NET 9 Web API)

**Path:** `ReactStore/ReactStore`

### Stack

- ASP.NET Core 9
- C#
- Clean project structure
- REST API for product operations
- Optional Entity Framework support (based on your implementation)

### 🚀 Getting Started (API)

```bash
cd ReactStore/ReactStore
dotnet build
dotnet run
```

Runs on `https://localhost:5001` or `http://localhost:5000` by default.

---

## ✅ Features

- 🧾 Product listing with images
- ✍️ Add/Edit/Delete products
- 📂 File uploads with drag & drop
- ✅ Form validation (zod + RHF)
- 🛒 Stripe payment support
- 📦 Modular architecture
- 🧪 Extensible for admin roles, auth, etc.

---

## 📦 Deployment

### Frontend

```bash
cd Client
npm run build
```

### Backend

```bash
cd ReactStore
dotnet publish -c Release -o out
```

---

## 🤝 Contributing

Pull requests and community contributions are welcome. Please follow code style and test changes before submitting.

---

## 📝 License

MIT License – feel free to use and modify for commercial or personal use.
