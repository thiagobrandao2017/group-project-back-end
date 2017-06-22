const db = require("../config/database");

let Favorite = {};

Favorite.favoritesIndex = () => {
    return db.any(`
      SELECT *
      FROM favorite_restaurants
      INNER JOIN restaurants
      ON favorite_restaurants.restaurant_id = restaurants.id
      WHERE favorite_restaurants.user_id = 1;
      `);
}



module.exports = Favorite;
