// src/components/ProductList.tsx
import { airpodsMax, aukey, dualshock4, earpods, hairdryer, straightener, stylerHS01, stylerHS05 } from '../constants';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Modal from './Modal';
import { Product } from '../types/Product';

const sampleProducts: Product[] = [
  { id: 1, name: 'Фен Dyson HD08', description: hairdryer , category: 'Бытовая техника', quantity: 1, unit: 'штука', image: '/public/dryer.png' },
  { id: 2, name: 'Выпрямитель Dyson HT01', description: straightener, category: 'Бытовая техника', quantity: 1, unit: 'штука', image: '/public/straightener.jpg' },
  { id: 3, name: 'Наушники Apple AirPods Max', description: airpodsMax, category: 'Электроника', quantity: 1, unit: 'штука', image: '/public/airpodsMax.jpg' },
  { id: 4, name: 'Стайлер HS01', description: stylerHS01, category: 'Бытовая техника', quantity: 1, unit: 'штука', image: '/public/hs01.jpg' },
  { id: 5, name: 'Стайлер HS05', description: stylerHS05, category: 'Бытовая техника', quantity: 1, unit: 'штука' , image: '/public/hs05.jpg'},
  { id: 6, name: 'Геймпад Dualshock 4', description: dualshock4, category: 'Электроника', quantity: 1, unit: 'штука' , image: '/public/dualshock4.jpg'},
  { id: 7, name: 'Наушники Aukey', description: aukey, category: 'Электроника', quantity: 1, unit: 'штука', image: '' },
  { id: 8, name: 'Наушники earpods lightning', description: earpods, category: 'Электроника', quantity: 1, unit: 'штука', image: '/public/earpods.png' },
  // Добавить другие товары
];

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="product-list">
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
      ))}
      {selectedProduct && <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default ProductList;