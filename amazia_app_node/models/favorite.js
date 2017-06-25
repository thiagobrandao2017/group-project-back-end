const db = require("../config/database");

let Favorite = {};

Favorite.favoritesIndex = (user) => {
    return db.any(`
      SELECT *
      FROM restaurants
      INNER JOIN favorites
      ON favorites.restaurant_id = restaurants.id
      WHERE favorites.user_id = $1;
      `, [user.id]);
}

Favorite.saveRestaurant = (user, restaurant) => {
    return db.one(`
        INSERT INTO favorites
        (user_id,
        restaurant_id)
        VALUES
        ($1,$2)
        RETURNING *
      `, [user.id, restaurant.restaurant_id])
}

Favorite.findById = (user, id) => {
    return db.oneOrNone(`
        SELECT * FROM restaurants
        INNER JOIN favorites
        ON favorites.restaurant_id = restaurants.id
        WHERE favorites.user_id = $1
        AND favorites.id = $2
    `, [user.id, id]);
}


module.exports = Favorite;
