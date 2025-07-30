import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api/axios';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, create or fetch a cart
  useEffect(() => {
    setLoading(true);
    api.post('/cart')
      .then(res => {
        setCartId(res.data.cart_id);
        return api.get(`/cart/${res.data.cart_id}`);
      })
      .then(res => {
        setCart(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sortCartItems = (cart) => ({
    ...cart,
    cart_items: [...(cart.cart_items || [])].sort((a, b) => a.item_product_id - b.item_product_id)
  });  

  // Add item to cart
  const addItem = (productId) => {
    if (!cartId) return;
    api.post(`/cart/${cartId}/add_item`, { product_id: productId })
      .then(() => api.get(`/cart/${cartId}`))
      .then(res => setCart(sortCartItems(res.data)));
  };

  // Refresh cart from backend
  const refreshCart = () => {
    if (!cartId) return;
    setLoading(true);
    api.get(`/cart/${cartId}`)
      .then(res => {
        setCart(sortCartItems(res.data));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <CartContext.Provider value={{ cart, cartId, loading, addItem, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}