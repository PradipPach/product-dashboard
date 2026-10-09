import { useState } from "react";
import Field from "./Field";
import Button from "./Button";
import { CATEGORIES } from "../data/products";

// What the form looks like when it is empty.
const emptyForm = { name: "", category: "", price: "", stock: "" };

// Checks every box in the form.
// It returns a list of problems. An empty list means everything is fine.
function validate(form, existingProducts) {
  const errors = {};
  const name = form.name.trim();

  if (!name) {
    errors.name = "Please enter a product name.";
  } else if (existingProducts.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
    errors.name = "This product is already in your list.";
  }

  if (!form.category) errors.category = "Please pick a category.";

  if (form.price === "" || Number(form.price) <= 0) {
    errors.price = "Price must be more than 0.";
  }

  if (form.stock === "" || !Number.isInteger(Number(form.stock)) || Number(form.stock) < 0) {
    errors.stock = "Stock must be a whole number (0 or more).";
  }

  return errors;
}

function ProductForm({ products, onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // One function handles every box.
  // The box's "name" tells us which part of the form changed.
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setMessage("");
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const foundErrors = validate(form, products);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return; // stop here if something is wrong

    onAdd({
      name: form.name.trim(),
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
    });
    setMessage(`"${form.name.trim()}" has been added.`);
    setForm(emptyForm); // clear the form for the next product
  }

  return (
    <form className="panel form" onSubmit={handleSubmit} noValidate>
      <h2>Add product</h2>

      <Field
        label="Product name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="e.g. Desk Lamp"
      />

      <Field
        as="select"
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        error={errors.category}
      >
        <option value="">Select a category</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Field>

      <div className="form-row">
        <Field
          label="Price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={form.price}
          onChange={handleChange}
          error={errors.price}
          placeholder="0.00"
        />
        <Field
          label="Stock"
          name="stock"
          type="number"
          min="0"
          step="1"
          value={form.stock}
          onChange={handleChange}
          error={errors.stock}
          placeholder="0"
        />
      </div>

      <Button type="submit">Add product</Button>

      {message && (
        <p className="form-success" role="status">
          {message}
        </p>
      )}
    </form>
  );
}

export default ProductForm;
