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

export async function getProductById(id) {
  const product = await sql`
  SELECT * FROM products WHERE id = ${id}`;
  return product[0];
}
