import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import '../App.css'
import api from '../api/axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    api.get('/product')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="child-div">
      <h2>Products</h2>
      <div className="product-buttons">
        {products.map((product) => (
          <button
            key={product.id}
            style={{ margin: '0.5em' }}
            onClick={() => addItem(product.id)}
          >
            <strong>{product.name}</strong> - ${product.price.toFixed(2)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;