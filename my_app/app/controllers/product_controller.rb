class ProductController < ApplicationController
    def index
        products = Product.all
        render json: products, status: :ok
    end
end
