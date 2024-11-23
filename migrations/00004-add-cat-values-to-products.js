exports.up = async (sql) => {
  sql`
	UPDATE products
  SET category = CASE
      WHEN id BETWEEN 1 AND 4 THEN 'rug'
      WHEN id BETWEEN 7 AND 8 THEN 'couches'
      ELSE 'accessories'
  END
	`;
};

//delete the products table
exports.down = async (sql) => {
  sql`
	DROP TABLE products`;
};
