import { useState } from "react";
import Modal from "./Modal";
import Field from "./Field";
import Button from "./Button";

// Small pop-up to change only the price and stock of one product.
function EditModal({ product, onSave, onClose }) {
  const [price, setPrice] = useState(String(product.price));
  const [stock, setStock] = useState(String(product.stock));
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const found = {};
    if (price === "" || Number(price) <= 0) found.price = "Price must be more than 0.";
    if (stock === "" || !Number.isInteger(Number(stock)) || Number(stock) < 0) {
      found.stock = "Stock must be a whole number (0 or more).";
    }
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    onSave(product.id, { price: Number(price), stock: Number(stock) });
  }

  return (
    <Modal title={`Update ${product.name}`} onClose={onClose}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <Field
            label="Price"
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={errors.price}
            autoFocus
          />
          <Field
            label="Stock"
            type="number"
            min="0"
            step="1"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            error={errors.stock}
          />
        </div>
        <div className="modal-actions">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </Modal>
  );
}

export default EditModal;
