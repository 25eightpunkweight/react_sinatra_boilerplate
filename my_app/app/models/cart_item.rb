class CartItem < ApplicationRecord
    belongs_to :cart
    belongs_to :product

    # validates :product_id, uniqueness: { scope: :cart_id, message: "is already in the cart" }

    def subtotal
        if product.product_code == 'GR1' && quantity > 0
            return product.price * (quantity / 2.0).ceil
        end

        if product.product_code == 'SR1' && quantity >= 3
            return (product.price * quantity) * 0.9
        end

        if product.product_code == 'CF1' && quantity >= 3
            return (product.price * quantity) * 0.66
        end

        return product.price * quantity
    end
end
  