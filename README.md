# 📦 Stockroom — Product Dashboard

Stockroom is a simple, responsive product dashboard built with **React** and **Vite**. Keep track of your products, prices, and stock levels in one place.

## ✨ Features

- ➕ Add products with helpful validation.
- 🔎 Search products by name and filter by category.
- ✏️ Update product prices and stock quantities.
- 🗑️ Delete products after confirming the action.
- 📊 View inventory totals and products that need restocking.
- 📱 Manage your products on desktop, tablet, or mobile.
- 💾 Keep product data saved in your browser between visits.

## 🚀 Getting started

### 📋 Prerequisites

Install [Node.js 18 or later](https://nodejs.org). npm comes with Node.js.

### 💻 Run locally

Clone the repository, install the dependencies, and start the development server:

```sh
git clone https://github.com/PradipPach/product-dashboard.git
cd product-dashboard
npm install
npm run dev
```

Open the address printed in your terminal. It is usually <http://localhost:5173>.

### 🏗️ Build for production

Create an optimized production build:

```sh
npm run build
```

To preview the production build on your computer, run:

```sh
npm run preview
```

## 🗂️ Project structure

```text
src/
├── App.jsx                    Main page and product management
├── index.css                  Application styles
├── main.jsx                   React entry point
├── data/
│   └── products.js            Sample products, categories, and currency settings
├── hooks/
│   └── useLocalStorage.js     Saves product data in the browser
└── components/                Reusable forms, dialogs, filters, and display components
```

## 🛠️ Customization

- Edit `CATEGORIES` in `src/data/products.js` to change the available categories.
- Edit `CURRENCY` in that file to change how prices are displayed.
- Edit `LOW_STOCK_LIMIT` to adjust when a product is flagged as low on stock.
- Change the CSS variables near the top of `src/index.css` to update the colors.

Product data is stored in your browser. To restore the sample products, clear this site's browser storage and reload the page.

## 👤 Author

Created by **Pradip Pachapol**.

## 🔗 Repository

[⭐ View the project on GitHub](https://github.com/PradipPach/product-dashboard)
