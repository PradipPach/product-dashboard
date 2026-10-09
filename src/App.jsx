import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { initialProducts } from "./data/products";

import Summary from "./components/Summary";
import ProductForm from "./components/ProductForm";
import SearchFilter from "./components/SearchFilter";
import ProductTable from "./components/ProductTable";
import EmptyState from "./components/EmptyState";
import EditModal from "./components/EditModal";
import ConfirmDelete from "./components/ConfirmDelete";

function App() {
  // ---- Data the app remembers ----
  const [products, setProducts] = useLocalStorage("products", initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [editing, setEditing] = useState(null);   // the product being edited (or null if none)
  const [deleting, setDeleting] = useState(null); // the product waiting to be deleted (or null if none)

  // ---- Things the user can do ----
  function addProduct(data) {
    const newProduct = { id: Date.now(), ...data };
    setProducts([newProduct, ...products]); // the newest product goes on top
  }

  function updateProduct(id, changes) {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...changes } : p)));
    setEditing(null);
  }

  function deleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
    setDeleting(null);
  }

  function clearFilters() {
    setSearch("");
    setCategory("All");
  }

  // ---- Search and filter ----
  // A product is shown only if it matches BOTH the search word and the chosen category.
  const visibleProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <header className="topbar">
        <h1>Stockroom</h1>
        <p>Product dashboard</p>
      </header>

      <Summary products={products} />

      <main className="layout">
        <aside>
          <ProductForm products={products} onAdd={addProduct} />
        </aside>

        <section className="panel list">
          <div className="list-head">
            <h2>Products</h2>
            <span className="count">
              Showing {visibleProducts.length} of {products.length}
            </span>
          </div>

          <SearchFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
          />

          {visibleProducts.length > 0 ? (
            <ProductTable
              products={visibleProducts}
              onEdit={setEditing}
              onDelete={setDeleting}
            />
          ) : (
            <EmptyState hasProducts={products.length > 0} onClear={clearFilters} />
          )}
        </section>
      </main>

      {/* A pop-up appears only when the user clicks Edit or Delete */}
      {editing && (
        <EditModal
          product={editing}
          onSave={updateProduct}
          onClose={() => setEditing(null)}
        />
      )}
      {deleting && (
        <ConfirmDelete
          product={deleting}
          onConfirm={deleteProduct}
          onClose={() => setDeleting(null)}
        />
      )}
    </div>
  );
}

export default App;
