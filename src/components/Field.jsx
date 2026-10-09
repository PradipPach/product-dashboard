// Reusable form box: a label, an input (or dropdown), and an error message.
// Write as="select" to get a dropdown, and put the <option>s inside it.
function Field({ label, error, as = "input", children, ...props }) {
  const Tag = as;
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <Tag className={error ? "input input-error" : "input"} {...props}>
        {children}
      </Tag>
      {error && <span className="field-error">{error}</span>}
    </label>
  );
}

export default Field;
