class CreateProducts < ActiveRecord::Migration[8.0]
  def change
    create_table :products do |t|
      t.string :product_code
      t.string :name
      t.float :price
      t.timestamps
    end
  end
end
