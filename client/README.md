# 🛒 ReactStore

A simple, modern React-based online store featuring sample products, cart functionality, and a clear component hierarchy. Perfect for learning purposes, small web shops, or as a boilerplate for larger e-commerce projects.

## 🚀 Features

- 📦 Product list with image, title, and price
- 🛍️ Shopping cart with live item count and total price calculation
- 🔄 State management using React Context API or Redux (depending on branch)
- 📱 Responsive design for desktop and mobile
- 🔌 REST API integration (with .NET backend)
- 💡 Easy to extend (product details, checkout, backend integration)

## 🖼️ Demo

> [👉 Live Demo (optional link)](https://example.com)

![Screenshot](./screenshot.png)

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/eugenalexander/ReactStore.git
cd ReactStore

# 2. Install dependencies
npm install

# 3. Start the local development server
npm start
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

## 🔌 API Integration (.NET)

This project supports integration with a .NET-based REST API for dynamic product data and cart actions.

### Example Endpoints (from .NET backend):

- `GET /api/products` – Fetch product list
- `POST /api/cart/add` – Add item to cart
- `DELETE /api/cart/remove/{id}` – Remove item from cart

### Environment Configuration

Set the API base URL in a `.env` file:

```env
REACT_APP_API_URL=https://localhost:5001/api
```

> You can build the backend using ASP.NET Core Web API and connect it via HTTP.

## 🧱 Tech Stack

- React 18+
- React Router (if used)
- Zustand / Redux / Context API
- Styled Components or CSS Modules
- ASP.NET Core Web API (for backend)
- (optional) Vite / CRA / Webpack – depending on setup

## 📁 Project Structure

```bash
src/
├── components/       # Reusable UI components
├── pages/            # Main pages (e.g., Home, Cart)
├── context/          # Global state management
├── assets/           # Images, icons, etc.
└── App.js            # Main entry point
```

## ✅ ToDo / Future Enhancements

- [ ] Product detail page
- [ ] Checkout flow with payment integration
- [ ] Connect to full .NET backend
- [ ] User login and registration

## 🧑‍💻 Contributing

Pull requests and issues are welcome! This project is ideal for anyone looking to learn React or contribute to open-source.

```bash
# Create a feature branch
git checkout -b feature/my-feature

# Commit and push your changes
git commit -m "My awesome feature"
git push origin feature/my-feature

# Open a PR 🚀
```

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

**Author:** [Eugen Alexander](https://github.com/eugenalexander)
