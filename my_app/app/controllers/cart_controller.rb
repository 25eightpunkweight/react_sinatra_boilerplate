class CartController < ApplicationController    
    skip_before_action :verify_authenticity_token
    def show
        @cart = Cart.find(params[:id])
        render json: {
            cart_id: @cart.id,
            cart_items: @cart.current_cart,
            cart_total: @cart.total_price
        }, status: :ok
    end

    def create
        oldest_carts = Cart.order(:created_at).limit(3)
        oldest_carts.destroy_all if Cart.count >= 3
      
        @cart = Cart.create()
        render json: { 
            cart_id: @cart.id,
        }, status: :created
    end
    
    def add_item
        @cart = Cart.find(params[:id])
        @cart.add_to_cart(params[:product_id])
        render json: {
            cart_id: @cart.id,
            cart_items: @cart.current_cart,
            cart_total: @cart.total_price
        }, status: :ok
    end
    
    def remove_item
        @cart = Cart.find(params[:id])
        @cart.remove_from_cart(params[:product_id])
        render json: {
            cart_id: @cart.id,
            cart_items: @cart.current_cart,
            cart_total: @cart.total_price
        }, status: :ok    
    end
end
