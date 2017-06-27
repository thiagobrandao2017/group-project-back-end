const db = require("../config/database");

let Restaurant = {};

Restaurant.findAll = () => {
    return db.any(`SELECT * FROM restaurants;`);
}

Restaurant.create = (restaurant, user) => {
    return db.one(`
        INSERT INTO restaurants
        (restaurant_name,
         img_url,
         description,
         type,
         address,
         rating,
         user_id,
         area)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
    `, [restaurant.restaurant_name,
        restaurant.img_url,
        restaurant.description,
        restaurant.type,
        restaurant.address,
        restaurant.rating,
        user.id,
        restaurant.area
      ]);
}

Restaurant.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM restaurants
        WHERE id = $1
    `, [id]);
}

Restaurant.update = (restaurant, id) => {
    return db.none(`
        UPDATE restaurants SET
         restaurant_name = $1,
         img_url = $2,
         description = $3,
         type = $4,
         address = $5,
         rating = $6,
         user_id = $7,
         area = $8
        WHERE id = $9
    `, [restaurant.restaurant_name,
        restaurant.img_url,
        restaurant.description,
        restaurant.type,
        restaurant.address,
        restaurant.rating,
        restaurant.user_id,
        restaurant.area,
        id]);
}

module.exports = Restaurant;
