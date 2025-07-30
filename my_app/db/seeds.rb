# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Product.create(id: 1, product_code: "GR1", name: "Green Tea", price: 3.11)
Product.create(id: 2, product_code: "SR1", name: "Strawberry", price: 5.0)
Product.create(id: 3, product_code: "CF1", name: "Coffee", price: 11.23)