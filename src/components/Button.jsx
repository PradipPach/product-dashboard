// Reusable button.
// variant: "primary" (main action) | "ghost" (plain outline) | "danger" (red, for delete)
// small: makes the button smaller
function Button({ variant = "primary", small = false, children, ...props }) {
  const classes = `btn btn-${variant}${small ? " btn-small" : ""}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
