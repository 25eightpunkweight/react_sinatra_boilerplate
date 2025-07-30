# Rails and React Shopping Cart Platform

## Greetings, Amenitiz!

You may clone this repo and checkout this specific branch: `amenitiz-code-evaluation`. 

Start the containers using `docker-compose up`.

  - The frontend Vite + React app is accessible via `http://localhost:1337`
  - The backend Rails app, while not meant to be accessed from a browser, has endpoints that the frontend app uses via `http://localhost:3000/`
  - The react frontend app fetches and displays the products available, and the current cart and its items.
  - To keep it simple, a new cart is requested from the rails app to the react app upon page load.
  - Users can click on a product at the left side to add to their cart at the right side.
  - Removing items from the cart are done one at a time by clicking on an item in the cart.
  - The price total is also shown at the bottom, applying the special promotions given in the spec.
  - To see a live online deployment of this app, click [here](https://react-cart-app.up.railway.app/).
