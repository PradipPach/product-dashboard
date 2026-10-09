import { LOW_STOCK_LIMIT, formatPrice } from "../data/products";

// The three big numbers at the top of the page.
function Summary({ products }) {
  // Total money in stock = price x stock, added up for every product.
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);

  // How many products need to be refilled soon.
  const needRestock = products.filter((p) => p.stock <= LOW_STOCK_LIMIT).length;

  return (
    <section className="summary" aria-label="Summary">
      <div className="summary-item">
        <strong>{products.length}</strong>
        <span>Total products</span>
      </div>
      <div className="summary-item">
        <strong>{formatPrice(totalValue).replace(/\.00$/, "")}</strong>
        <span>Total stock value</span>
      </div>
      <div className="summary-item">
        <strong className={needRestock > 0 ? "text-warn" : ""}>{needRestock}</strong>
        <span>Need restocking</span>
      </div>
    </section>
  );
}

export default Summary;
