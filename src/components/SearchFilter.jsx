import { CATEGORIES } from "../data/products";

// Search box + category dropdown.
// App.jsx keeps the typed text and chosen category, and this component just shows them.
function SearchFilter({ search, onSearchChange, category, onCategoryChange }) {
  return (
    <div className="toolbar">
      <input
        className="input"
        type="search"
        placeholder="Search products by name"
        aria-label="Search products"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        className="input"
        aria-label="Filter by category"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchFilter;
