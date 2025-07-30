class ProductController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        products = Product.all
        render json: products, status: :ok
    end
end
