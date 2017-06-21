const db = require("../config/database");

let Restaurant = {}

Restaurant.findAll = () =>
{
    return db.any(`SELECT * FROM restaurants;`)
};



module.exports = Restaurant;
