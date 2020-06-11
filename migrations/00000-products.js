//create products table

exports.up = async (sql) => {
  sql`
	CREATE TABLE products(
		id SERIAL PRIMARY KEY, 
		name VARCHAR NOT NULL,
		img VARCHAR NOT NULL,
		price INT,
		info TEXT
		)
	`;
};

//delete the products table
exports.down = async (sql) => {
  sql`
	DROP TABLE products`;
};
