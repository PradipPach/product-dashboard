import { LOW_STOCK_LIMIT } from "../data/products";

// Shows a small coloured label that depends on how much stock is left:
// 0 = red "Out of stock", low = orange "Low stock", otherwise green "In stock".
function StockBadge({ stock }) {
  if (stock === 0) return <span className="badge badge-out">Out of stock</span>;
  if (stock <= LOW_STOCK_LIMIT) return <span className="badge badge-low">Low stock</span>;
  return <span className="badge badge-ok">In stock</span>;
}

export default StockBadge;
