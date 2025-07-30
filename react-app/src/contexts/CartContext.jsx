import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, create or fetch a cart
  useEffect(() => {
    setLoading(true);
    axios.post('http://localhost:3000/cart')
      .then(res => {
        setCartId(res.data.cart_id);
        return axios.get(`http://localhost:3000/cart/${res.data.cart_id}`);
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
    axios.post(`http://localhost:3000/cart/${cartId}/add_item`, { product_id: productId })
      .then(() => axios.get(`http://localhost:3000/cart/${cartId}`))
      .then(res => setCart(sortCartItems(res.data)));
  };

  // Refresh cart from backend
  const refreshCart = () => {
    if (!cartId) return;
    setLoading(true);
    axios.get(`http://localhost:3000/cart/${cartId}`)
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