DROP DATABASE IF EXISTS restaurants_db;
CREATE DATABASE restaurants_db;

\c restaurants_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
id SERIAL PRIMARY KEY,
restaurant_name VARCHAR(255),
img_url VARCHAR(255),
description TEXT,
type VARCHAR(255),
address VARCHAR(255),
rating INT,
user_id INTEGER REFERENCES users(id),
area VARCHAR(255)
);

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
restaurant_id INTEGER REFERENCES restaurants(id)
);


INSERT INTO users
(first_name, last_name, email, password)
VALUES
('Thiago','Brandao','thiago@thiago.com','julia'),
('Kevin','Xu','kevin@kevin.com','kevin'),
('Julia','Kim','julia@julia.com','julia');


INSERT INTO restaurants
(restaurant_name, img_url, description, type, address, rating, user_id, area)
VALUES
('Mission Chinese', 'https://media.timeout.com/images/100453571/image.jpg','New York outpost of the San Francisco eatery serving fiery, innovative takes on Sichuan cuisine.', 'Chinese', '171 E Broadway, New York, NY 10002', '9', 1, 'Lower East Side'),
('Casa Mono', 'https://static01.nyt.com/images/2015/09/16/dining/16REST-CASAMONO-slide-AS0C/16REST-CASAMONO-slide-AS0C-master1050.jpg', 'Small-bite fans gather at this intimate Gramercy nook for upscale Spanish dishes & a deep wine list.', 'Spanish', '52 Irving Pl, New York, NY 10003', '9', 1,'Gramercy Park'),
('Sushi Tenoshi', 'http://www.chopsticksny.com/archives/contents/wp-content/uploads/0213_Tanoshi_main.jpg', 'Small, low-key Japanese pick offering high-quality omakase meals & a BYO policy.', 'Japanese', '1372 York Ave, New York, NY 10021', '9', 1,'Upper East Side'),
('Momofuko Ko', 'https://static01.nyt.com/images/2015/10/14/dining/14REST-MOMOFUKU-slide-40ZH/14REST-MOMOFUKU-slide-40ZH-master1050.jpg', 'Tiny, tough-to-reserve eatery via David Chang offering multicourse, Asian-accented American meals.', 'American', '8 Extra Pl, New York, NY 10003', '10', 1,'Lower East Side'),
('Emily', 'http://bpc.h-cdn.co/assets/17/23/980x490/landscape-1497022498-pizza-loves-emily-west-village.jpg', 'This cozy, gourmet eatery serves wood-fired Neapolitan pizzas, rustic small plates & pastas.','American', '35 Downing St, New York, NY 10014', '9', 1, 'West Village'),
('Casa Enrique', 'https://sometimesicrave.files.wordpress.com/2012/10/dsc4503.jpg', 'Casual cantina serving up refined Mexican classics & cocktails amid concrete floors & mod seating.', 'Mexican', '5-48 49th Ave, Long Island City, NY 11101', '8', 1, 'Long Island City'),
('Estela', 'https://media-cdn.tripadvisor.com/media/photo-s/0e/6a/7e/85/estela-restaurant.jpg', 'Small plates made with market ingredients & Mediterranean twists served in an unfussy cafe space.', 'Mediterranean', '47 E Houston St, New York, NY 10012', '8', 3, 'Lower East Side'),
('Cosme', 'https://farm9.staticflickr.com/8627/15768928180_44a42358ba_z.jpg', 'Mexican share plates made with local ingredients & tequila & mezcal in sleek digs with a big bar.', 'Mexican', '35 E 21st St, New York, NY 10010', '9', 3, 'Lower East Side'),
('Charlie Bird', 'http://compassandtwine.com/wp-content/uploads/2015/09/Charlie_Bird-Roast-Chicken-with-Crispy-Bit-Salad-885x590.jpg', 'Hip, bi-level spot with Italian-accented American fare, a broad wine list & art featuring boomboxes.', 'Italian', '5 King St, New York, NY 10012', '9', 3,'Washington Square Park'),
('Pasquale Jones', 'https://lh3.googleusercontent.com/YTXJCD9NyaI8s4mvDvGD0E_6bFmeZI3xtUQbxIE-xuNZQ2RJX__0_YOrL8EZmK36=s1024', 'Italian place by the Charlie Bird team for wood-fired pizzas, meats and fish from the open kitchen.', 'Italian', '187 Mulberry St, New York, NY 10012', '9', 3,'Little Italy'),
('Gramercy Tavern', 'http://newyork.seriouseats.com/images/20091215_gtavern_sweetbread.jpg', 'Danny Meyer Flatiron District tavern with a fixed-price-only dining room & a bustling bar area.', 'American', '42 E 20th St, New York, NY 10003', '9', 3, 'Gramercy Park'),
('Nur', 'https://2.bp.blogspot.com/-nlhSY-8SK3M/WFEQE-6vGOI/AAAAAAAAgjY/3LHFt6HGxR8Qn8H7GX2cQ0Jbdl_ugGGQwCLcB/s1600/plat-marocain.jpg', 'Stylish setting for Middle Eastern small plates & shareable dishes, plus breads & desserts.', 'Middle Eastern', '34 E 20th St, New York, NY 10003', '8', 3,'Gramercy Park'),
('Atoboy', 'https://swirled.com/wp-content/uploads/2016/08/ATOBOY-Squid-pork-shrimp-salsa-verde.jpg', 'Korean tasting menus (of small plates & rice) geared toward sharing in an understated space.', 'Korean', '43 E 28th St, New York, NY 10016', '8', 3,'Gramercy Park'),
('Dhaba', 'http://www.dhabanyc.com/images/slider/2.jpg', 'Indian dining room serving fiery Punjabi specialties & a lunch buffet seven days a week.', 'Indian', '108 Lexington Ave, New York, NY 10016', '8', 2,'Gramercy Park'),
('Indian Accent', 'https://resizer.otstatic.com/v2/photos/large/24195933.jpg', 'High-end Indian restaurant in Le Parker Meridien offering creative prix fixe menus & wine pairings.', 'Indian', '123 W 56th St, New York, NY 10019', '9', 2,'Hells Kitchen'),
('Nobu', 'https://static01.nyt.com/images/2017/03/29/dining/29NOBU2/29NOBU2-master675.jpg', 'Famed Japanese-Peruvian fare in a landmark space with an artful lounge & downstairs dining room.', 'Japanese', '195 Broadway, New York, NY 10007', '8', 2, 'Financial District'),
('Shuko', 'http://www.findeatdrink.com/Index/Restaurants/Entries/2014/7/21_shuko_beach_files/shukobeach_1-3.jpg', 'Compact, omakase-only Japanese choice for upscale sushi or more elaborate kaiseki meals.', 'Japanese', '47 E 12th St, New York, NY 10003', '9', 2,'Union Square Park'),
('Osteria Morini', 'https://www.nycgo.com/images/venues/5740/_osteria-morini-altamarea-group-02__x_large.jpg', 'Emilia-Romagna cuisine in a warm setting accented by pieces from a 1700s-era Italian farmhouse.', 'Italian', '218 Lafayette St, New York, NY 10012', '8', 2, 'Lower East Side'),
('Chote Nawab', 'http://newyork.seriouseats.com/assets_c/2013/09/20130918-chote-nawab-shrimp-thumb-610x404-353457.jpg', 'Modern decor meets Bollywood art at this Indian hot spot known for kebabs & dum biryani rice pots.', 'Indian', '115 Lexington Ave, New York, NY 10016', '7', 2,'Madison Square Park'),
('Artichoke Pizza', 'https://img.grouponcdn.com/deal/ewJh8QWZr8tSPY1ToqvL2KHDJzE/ew-700x420/v1/c700x420.jpg', 'Patrons line up into the wee hours to snag signature artichoke pizza from this counter-service spot.', 'Pizza', '321 E 14th St, New York, NY 10003', '8', 1,'Eaat Village'),
('Co.', 'http://kid-nosh.com/wp-content/uploads/2013/02/flatbread_pizza.jpg', 'Gourmet pizzas are made with inventive toppings at this restaurant with communal tables.', 'Pizza', '230 9th Ave, New York, NY 10001', '7', 1, 'West Village'),
('Katz deli', 'http://ilovekatzs.com/wp-content/uploads/2011/11/pastrami1.jpg', 'No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.', 'Jewish', '205 E Houston St, New York, NY 10002', '8', 1, 'Lower East Side'),
('ABCV', 'https://www.wellandgood.com/wp-content/uploads/2017/03/abcv-opening-bowl.jpg', 'Vegan spot by Jean-Georges Vongerichten for seasonal plates, tonics & cocktails inside ABC Carpet.', 'Vegan', '38 E 19th St, New York, NY 10003', '7', 1, 'Gramercy Park'),
('Loring Place', 'https://gotham-magazine.com/get/files/image/galleries/Loring-Place-3.jpg', 'Upscale-casual American restaurant for seasonal, wood-fired dishes, handmade pastas & pizzas.', 'American', '21 W 8th St, New York, NY 10011', '8', 3, 'East Village'),
('Pig Bleeker', 'https://pixel.nymag.com/imgs/daily/grub/2017/01/02/pig-beach/pig-beach-04.w710.h473.jpg', 'Airy, rustic-chic BBQ eatery with upscale smoked meats, market veggies & Italian accents.', 'Barbecue', '155 Bleecker St, New York, NY 10012', '8', 3,'East Village'),
('Marea', 'http://www.marea-nyc.com/files/371a525746019c8c3984acba897d7c1e_full_size.jpg', 'High-end Italian seafood & housemade pastas from Michael White in a chic Central Park South setting.', 'Italian', '240 Central Park S, New York, NY 10019', '9', 3,'Hells Kitchen'),
('Thursday Kitchen', 'https://woozoonyc.com/wp-content/uploads/2016/10/Must-try-Korean-Tapas-in-the-East-Village-Thursday-Kitchen-08-1024x680.jpg', 'Casual spot for Korean cooking with French & Spanish influences, plus playful drinks & desserts.', 'Eclectic', '424 E 9th St, New York, NY 10009', '8', 1, 'East Village'),
('Wildair', 'https://static01.nyt.com/images/2015/10/07/dining/07REST-WILDAIR-slide-I9ZF/07REST-WILDAIR-slide-I9ZF-facebookJumbo.jpg', 'An offshoot of Contra, this American restaurant serves sophisticated American fare in simple digs.', 'American', '142 Orchard St, New York, NY 10002', '8', 3, 'East Village'),
('Kikis', 'https://s3-media1.fl.yelpcdn.com/bphoto/Q9eY3XT7BuHDFWA5jMhy-Q/348s.jpg', 'Straightforward Greek cuisine such as seafood & lamb served in warm digs with exposed-wood beams.', 'Greek', '130 Division St, New York, NY 10002', '8', 2, 'Lower East Side'),
('Sushi Nakazawa', 'https://static01.nyt.com/images/2013/12/11/dining/11REST_395/11REST_395-master675.jpg', 'Destination sushi spot for high-end omakase (multicourse, chefs choice meals) in spare digs.', 'Japanese', '23 Commerce St, New York, NY 10014', '9', 1, 'Washington Square Park');
