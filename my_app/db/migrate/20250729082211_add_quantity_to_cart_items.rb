class AddQuantityToCartItems < ActiveRecord::Migration[8.0]
  def change
    change_table :cart_items do |t|
      t.integer :quantity, null: false, default: 1
    end
  end
end
      