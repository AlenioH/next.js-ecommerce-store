//insert products into database

exports.up = async (sql) => {
  sql`
	INSERT INTO products(name, img, price, info, category) VALUES ('GlowBuds', '/lights-1.jpg', 129, 'Meet GlowBuds – tiny lamps with big vibes! Brighten up your space and your mood, one cheerful glow at a time. Warning: May cause spontaneous dance parties.', 'lights'),
	('Chime Lights', '/lights-2.jpg', 95, 'Ding-ding! ChimeLights are here to light up your world with ethnic flair and a sprinkle of jingle. Who knew bells could look this bright?', 'lights'),
	('Vintage Beam', '/lights-3.jpg', 134, 'Step back in time with Vintage Beam – the floor lamp that is all style, no time travel required. Retro charm, modern glow!', 'lights'),
	('Sprout Buddy', '/plants-1.jpg', 23, 'Say hello to SproutBuddy – the tiny succulent that is low on drama but high on charm. Just add sunlight and compliments!', 'plants'),
	('BlushBloom Set', '/plants-2.jpg', 57, 'Meet the BlushBloom Set – a squad of adorable succulents rocking pink pots and zero maintenance vibes. Cute, classy, and totally unkillable!', 'plants'),
	('Stone Bloom Duo', '/plants-3.jpg', 49, 'Say hello to the Stone Bloom Duo – two sleek succulents in rugged concrete pots. Strong, silent, and effortlessly cool – just like you.', 'plants'),
	('Rustic Greens Collection', '/plants-4.jpg', 25, 'Bring the outdoors in with the RusticGreens Collection – a bold mix of lush succulents in earthy, rustic pots. Big vibes, zero fuss!', 'plants')
	`;
};

//remove products from databse

exports.down = async (sql) => {
  sql`
	DELETE FROM products WHERE name IN('Glowbuds', 'Chime Lights', 'Vintage Beam', 'Sprout Buddy', 'BlushBloom Set', 'Stone Bloom Duo', 'Rustic Greens Collection',
	)
	`;
};
