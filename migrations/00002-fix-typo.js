exports.up = async (sql) => {
  sql`
	UPDATE products
  SET info = 'This rug is as pink as a marshmallow. And as mellow as a marsh.' WHERE name = 'Pink one'
	`;
};

//delete the products table
exports.down = async (sql) => {
  sql`
	DROP TABLE products`;
};
