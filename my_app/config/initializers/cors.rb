Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://#{ENV['FRONTEND_HOST']}:1337"
  
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end