require('dotenv').config();
require('./extractHerokuDatabaseEnvVars')();

const postgres = require('postgres');
const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

export async function getProducts() {
  const products = await sql`
    SELECT * FROM products
  `;
  return products;
}

export async function getProductsSortedByCat() {
  const products = await sql`
    SELECT * FROM products
  `;

  const groupedProducts = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = []; // initialize a group for the category if it doesn't exist
    }
    groups[category].push(product); // add the product to the appropriate group
    return groups;
  }, {});

  return groupedProducts;
}

export async function getProductById(id) {
  const product = await sql`
    SELECT * FROM products WHERE id = ${id}
  `;
  return product[0];
}
