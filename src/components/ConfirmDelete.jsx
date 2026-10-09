import Modal from "./Modal";
import Button from "./Button";

// Asks "Are you sure?" before a product is deleted.
function ConfirmDelete({ product, onConfirm, onClose }) {
  return (
    <Modal title="Delete product?" onClose={onClose}>
      <p className="modal-text">
        <strong>{product.name}</strong> will be removed from your list. This cannot be undone.
      </p>
      <div className="modal-actions">
        <Button variant="ghost" onClick={onClose}>
          Keep product
        </Button>
        <Button variant="danger" onClick={() => onConfirm(product.id)}>
          Delete product
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDelete;
