import { Product } from '../types/Product';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Категория: {product.category}</p>
        <p>Количество: {product.quantity} {product.unit}</p>
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="placeholder">Нет изображения товара</div>
        )}
      </div>
    </div>
  );
};

export default Modal;