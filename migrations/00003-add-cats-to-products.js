exports.up = async (sql) => {
  sql`
	ALTER TABLE products
  ADD COLUMN category VARCHAR(255) DEFAULT 'Uncategorized';
	`;
};

//delete the products table
exports.down = async (sql) => {
  sql`
	DROP TABLE products`;
};
