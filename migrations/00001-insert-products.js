//insert products into database

exports.up = async (sql) => {
  sql`
	INSERT INTO products(name, img, price, info) VALUES ('Creamy rug', '/carpet1.png', 199, 'This rug is super soft and cosy and will make your home the prettiest home in Austria and neighboring countries.'),
	('Jungle rug', '/carpet2.png', 240, 'This rug will make your home feel like a jungle. Which is not necessarily a good thing but here you go.'),
	('Fluffy rug', '/carpet3.png', 329, 'This rug is fluffy as a baby kitten, if it doesn''t make your heart melt, I don''t know what will.'),
	('Marijuana rug', '/carpet4.png', 118, 'This is Chris''s special rug, please check with him if he''s okay with you purchasing it.'),
	('Pink one', '/carpet5.png', 208, 'This rug is as pink as a murshmellow. And as mellow as a marsh.'),
	('Fluffy cushion', '/cushion1.png', 29, 'Yes, everything in this online-shop has to be fluffy.'),
	('Lovey Loverson Couch', '/couch1.png', 499, 'This couch was inspired by Phoebe Buffay. Make sure you do not let your smelly cat mark its exquisite exterior.'),
	('Catey Caterson pet couch', '/catcouch.png', 2999, 'This is a matching couch for your fluffy baby. You might just wanna get two of these...'),
	('Magic clock', '/clock.png', 169, 'This magic clock will not only awaken you at 4:30 am by imitating real sunrise, but will also tell you the weather, generate the meme of the day and plan your free-time activities.')

	`;
};

//remove products from databse

exports.down = async (sql) => {
  sql`
	DELETE FROM products WHERE name IN('Creamy rug', 'Jungle rug', 'Fluffy rug', 'Marijuana rug', 'Pink one', 'Fluffy cushion', 'Lovey Loverson Couch', 'Catey Caterson pet couch', 'Magic clock' 
	) 
	`;
};
