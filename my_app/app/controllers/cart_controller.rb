class CartController < ApplicationController    
    def show
        @items = @cart.items
    end

    def create
        @cart = Cart.create()
        render json: { 
            cart_id: @cart.id,
        }, status: :created
    end
    
    def add_item
        @cart = Cart.find(params[:cart_id])
        @cart.add_to_cart(params[:product_id])
        render json: {
            cart_id: @cart.id,
            cart_items: @cart.current_cart
            cart_total: @cart.total_price
        }, status: :updated
    end
    
    def remove_item
        @cart = Cart.find(params[:cart_id])
        @cart.remove_from_cart(params[:product_id])
        render json: {
            cart_id: @cart.id,
            cart_items: @cart.current_cart
            cart_total: @cart.total_price
        }, status: :updated    end
end
