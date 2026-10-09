// ===== Simple settings and starter data for the whole app =====

// Categories shown in the "Add product" form and in the filter box.
// To add a new category, just add a new line here.
export const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Sports",
  "Beauty",
];

// Currency symbol shown before every price. Change it here to change it everywhere.
export const CURRENCY = "₹";

// If stock is this number or less, the product is shown as "Low stock".
export const LOW_STOCK_LIMIT = 5;

// Turns a number into an easy-to-read price.
// Example: 1299.5  ->  ₹1,299.50
export function formatPrice(amount) {
  return (
    CURRENCY +
    Number(amount).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

// Sample products, so the dashboard is not empty the first time you open it.
export const initialProducts = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 1499, stock: 42 },
  { id: 2, name: "Cotton Hoodie", category: "Clothing", price: 899.5, stock: 18 },
  { id: 3, name: "Steel Water Bottle", category: "Home & Kitchen", price: 349, stock: 4 },
  { id: 4, name: "Learning React (Book)", category: "Books", price: 599, stock: 12 },
  { id: 5, name: "Yoga Mat", category: "Sports", price: 699, stock: 0 },
  { id: 6, name: "Vitamin C Face Serum", category: "Beauty", price: 425, stock: 31 },
  { id: 7, name: "Mechanical Keyboard", category: "Electronics", price: 3299, stock: 7 },
  { id: 8, name: "Non-stick Frying Pan", category: "Home & Kitchen", price: 749, stock: 3 },
];
