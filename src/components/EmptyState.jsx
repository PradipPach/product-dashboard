import Button from "./Button";

// Shown when there is nothing to display. Two cases:
// there are no products at all, or no product matches the search or filter.
function EmptyState({ hasProducts, onClear }) {
  if (!hasProducts) {
    return (
      <div className="empty">
        <h3>No products yet</h3>
        <p>Use the form to add your first product.</p>
      </div>
    );
  }

  return (
    <div className="empty">
      <h3>No products match</h3>
      <p>Try a different search word or category.</p>
      <Button variant="ghost" onClick={onClear}>
        Clear search and filter
      </Button>
    </div>
  );
}

export default EmptyState;
