import React from 'react';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import api from '../api/axios';

function CartDiv() {
    const { cart, cartId, loading, refreshCart } = useCart();

    const handleRemove = (productId) => {
    if (!cartId) return;
    api.delete(`/cart/${cartId}/remove_item`, {
        data: { product_id: productId }
    }).then(() => {
        refreshCart();
    });
    };

    if (loading) return <p>Loading cart...</p>;
    if (!cart) return <p>No cart found.</p>;

    return (
        <div className="child-div">
        <h2>Cart</h2>
        <div className="product-buttons">
            {cart.cart_items && cart.cart_items.length > 0 ? (
            cart.cart_items.map((item, idx) => (
                <button
                key={idx}
                className="product-button"
                style={{ margin: '0.5em' }}
                onClick={() => handleRemove(item.item_product_id)}
                >
                <strong>{item.item_name}</strong> x {item.quantity} — ${item.subtotal.toFixed(2)}
                </button>
            ))
            ) : (
            <button
                className="product-button"
                style={{ margin: '0.5em' }}
                disabled
            >
                <strong>Your cart is empty.</strong>
            </button>
            )}
        </div>
        <div className="cart-total">
            <strong>Total: ${cart.cart_total?.toFixed(2) ?? '0.00'}</strong>
        </div>
        </div>
    );
    }

export default CartDiv;