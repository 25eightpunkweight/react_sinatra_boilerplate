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
        item = Item.find(params[:item_id])
        @cart.add_item(item)
        redirect_to cart_path, notice: "#{item.name} has been added to your cart."
    end
    
    def remove_item
        item = Item.find(params[:item_id])
        @cart.remove_item(item)
        redirect_to cart_path, notice: "#{item.name} has been removed from your cart."
    end
end
