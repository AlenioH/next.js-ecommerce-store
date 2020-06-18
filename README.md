<!-- Create a readme with:
title
description
all technologies used
1 or 2 screenshots
setup instructions
deployment instructions -->

# Bist du Teppich online-shop

## Description

The project at hand is an online shop of interior decoration items created with Next.js.

The shop features following pages and functionality:

- a products page which also contains a search bar
- a page for each single product
- a shopping cart page containing a list where products appear when you click on the "Add to cart" button on the single product page, which also shows the total price of all products
- a checkout page which shows the total and asks for shipping and payment information (when you click on "Go to Checkout" on the shopping cart page it goes here)
- a thank you page after a checkout has been completed
- the header shows a shopping cart with the current number of items on all pages.

Products page: ![Products Page](/public/screenshot1.png)
Cart: ![Cart Page](/public/screenshot2.png)

## Technologies used

Bist du Teppich is a Next.js app which makes use of PostgresQL database. Migrations are set up with Ley. It uses cookies to keep track of items in cart and their amount. Some pages and components are written using Typescript. The project contains testing with Jest and Cypress. Deployment was carried out with Heroku.
