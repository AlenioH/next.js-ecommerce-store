# Bist du Teppich online-shop

## Description

The project at hand is an online shop of interior decoration items created with Next.js(https://nextjs.org/).

The shop features following pages and functionality:

- a products page which also contains a search bar
- a page for each single product
- a shopping cart page containing a list where products appear when you click on the "Add to cart" button on the single product page, which also shows the total price of all products
- a checkout page which shows the total and asks for shipping and payment information (when you click on "Go to Checkout" on the shopping cart page it goes here)
- a thank you page after a checkout has been completed
- the header shows a shopping cart with the current number of items on all pages.

### Product page

<img src="/public/screenshot1.png" width="500">
<br>

### Cart

<img src="/public/screenshot2.png" width="500">

## Technologies used

Bist du Teppich is a Next.js app which makes use of PostgresQL database. Migrations are set up with Ley(https://github.com/lukeed/ley). It uses cookies to keep track of items in cart and their amount. Some pages and components are written using Typescript. The project contains testing with Jest(https://jestjs.io/) and Cypress(https://www.cypress.io/). Deployment was carried out with Heroku(https://dashboard.heroku.com/).

## Setup instructions

### Database Setup

Copy the .env.example file to .env and add the database connection information.

You'll also need PostgreSQL for this.

PostgreSQL Installation instructions

Follow the instructions from the PostgreSQL step on https://github.com/upleveled/system-setup.

Run the following queries inside of psql to set up the database and the user:

```
CREATE DATABASE <databasename>;
```

```
CREATE USER <username> WITH ENCRYPTED PASSWORD '<password>';
```

```
GRANT ALL PRIVILEGES ON DATABASE <databasename> TO <username>;
```

Then, in order to connect to the database using this new user, quit psql and reconnect:

```
\q
psql -U nextjs_ecommerce_score nextjs_ecommerce_store;
```

You can run the migrations with the following command:

```
npm run migrate up
```

To drop the last migration run the following in your terminal:

```
npm run migrate down
```

### Deployment instructions for Heroku

- Sign up for Heroku: https://signup.heroku.com/
- Create a new App
- Choose a name and select your region
- Click on the button in the middle called "Connect to GitHub"
- Search for your repository in the search box at the bottom of the page and click on the "Connect" button
- Click on the button for "Enable Automatic Deploys"
- Go back to the Overview tab and click on "Configure Add-On"
- Search for "Postgres" and select "Heroku Postgres" from the results
