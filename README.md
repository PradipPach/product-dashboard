# Stockroom - Product Dashboard (React)

A simple admin page where you can manage your products.

## What you can do
- Add a new product (the form checks your input and shows clear messages)
- See all products in a list
- Change the price and stock of a product (Edit button)
- Delete a product (it asks "Are you sure?" first)
- Search products by name
- Show only one category
- Use it on a phone, tablet or computer
- Your products are saved in the browser, so they are still there after a refresh

## How to run it
1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal inside this folder and type:

       npm install
       npm run dev

3. Open the link shown in the terminal (usually http://localhost:5173)

## What is inside each file
    src/
      App.jsx                    main page, keeps all the data and actions
      index.css                  all colours and styles
      data/products.js           categories, currency, price format, sample products
      hooks/useLocalStorage.js   saves the products in the browser
      components/
        Button.jsx               reusable button
        Field.jsx                reusable label + input + error message
        Modal.jsx                reusable pop-up box
        ProductForm.jsx          form to add a product
        SearchFilter.jsx         search box + category dropdown
        ProductTable.jsx         product list (cards on phones)
        StockBadge.jsx           In stock / Low stock / Out of stock label
        EditModal.jsx            pop-up to change price and stock
        ConfirmDelete.jsx        "Are you sure?" pop-up
        EmptyState.jsx           message when there is nothing to show
        Summary.jsx              the three numbers at the top

## Easy changes
- New or renamed category: edit `CATEGORIES` in `src/data/products.js`
- Different currency: edit `CURRENCY` in the same file
- "Low stock" limit: edit `LOW_STOCK_LIMIT` in the same file
- Colours: edit the variables at the top of `src/index.css`
- Want the sample products back? Clear the site data in your browser and refresh.
