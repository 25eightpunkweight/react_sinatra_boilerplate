class Cart < ApplicationRecord
    has_many :cart_items, dependent: :destroy
    has_many :products, through: :cart_items

    def total_price
        cart_items.sum(&:subtotal)
    end

    def current_cart
        cart_items.reload
        cart_items.map { 
            |item| {
                item_product_id: item.product_id, 
                item_name: item.product.name, 
                item_price: item.product.price, 
                quantity: item.quantity, 
                subtotal: item.subtotal
            } 
        }
    end

    def add_to_cart(product_id)
        cart_item = cart_items.find_or_initialize_by(product_id: product_id)
        cart_item.quantity += 1 unless cart_item.new_record?

        product = cart_item.product
        if product.product_code == 'GR1'
            cart_item.quantity = (cart_item.quantity / 2.0).ceil * 2
        end

        cart_item.save
    end

    def remove_from_cart(product_id) 
        cart_item = cart_items.find_by(product_id: product_id)

        cart_item.quantity -= 1

        if cart_item.quantity == 0
            cart_item.destroy
        else
            cart_item.save
        end
    end
end
  