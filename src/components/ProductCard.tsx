import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      {product.image ? (
        <img src={product.image} alt={product.name} />
      ) : (
        <div className="placeholder">Нет изображения товара</div>
      )}
      <h3><strong>{product.name}</strong></h3>
      <p>{product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}</p>
      <p>Категория: {product.category}</p>
      <p>Кол-во: {product.quantity} {product.unit}</p>
    </div>
  );
};

export default ProductCard;
