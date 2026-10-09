import Button from "./Button";
import StockBadge from "./StockBadge";
import { formatPrice } from "../data/products";

// One row of the table (one product).
// On phones, the CSS turns each row into a small card.
// That is why every <td> has a "data-label" (the small title shown on the card).
function ProductRow({ product, onEdit, onDelete }) {
  return (
    <tr>
      <td data-label="Product" className="cell-name">
        {product.name}
      </td>
      <td data-label="Category">{product.category}</td>
      <td data-label="Price">{formatPrice(product.price)}</td>
      <td data-label="Stock">
        {product.stock} <StockBadge stock={product.stock} />
      </td>
      <td data-label="Actions" className="cell-actions">
        <Button
          variant="ghost"
          small
          aria-label={`Edit ${product.name}`}
          onClick={() => onEdit(product)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          small
          aria-label={`Delete ${product.name}`}
          onClick={() => onDelete(product)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

// The full table: a header row, then one row for each product.
function ProductTable({ products, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <ProductRow key={p.id} product={p} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
