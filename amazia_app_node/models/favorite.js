const db = require("../config/database");

let Favorite = {};

Favorite.favoritesIndex = (user) => {
    return db.any(`
      SELECT *
      FROM favorites
      INNER JOIN restaurants
      ON favorites.restaurant_id = restaurants.id
      WHERE favorites.user_id = $1;
      `, [user.id]);
}

Favorite.saveRestaurant = (user, restaurant_id) => {
    return db.one(`
        INSERT INTO favorites
        (user_id,
        restaurant_id)
        VALUES
        ($1,$2)
        RETURNING *
      `, [user.id, restaurant_id])
}

// Favorite.findById = () => {
//     return db.oneOrNone(`
//         SELECT * FROM favorites
//         WHERE user_id = $1
//         AND id = $2
//     `, []);
// }
//
// Favorite.update = () => {
//     return db.none(`
//
//     `, );
// }
//
// Favorite.destroy = () => {
//     return db.none(`
//
//     `, );
// }
module.exports = Favorite;
