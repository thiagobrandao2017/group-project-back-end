const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Restaurant = require('../models/restaurant')

describe('Restaurant Resource', () => {

  // let restaurantRecord;
  //
  // before((done) => {
  //   Restaurant
  //   .create({
  //     restaurant_name: 'Test',
  //     img_url: 'Test.jpg',
  //     description: 'This is a test',
  //     type: "Test",
  //     address: 'Test avenue',
  //     rating: 3,
  //     area: 'Test area'
  //   })
  //   .then((restaurant) => {
  //     restaurantRecord = restaurant;
  //     done();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // })

//GET /restaurants should return 200 status code and array of restaurants
//GET /restaurants/:id should return 200 and object representing specific restaurant
//POST /reaturants should return 201 and object representing new restaurant
//PUT /reaturants/:id should return 200

it("GET /restaurants should return 200 status code and an array of resturants", (done) => {
      request(app)
      .get("/restaurants")
      .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.an("array");
          done();
      });
  });

  // it("POST /restaurants should return 201 status code and an object of the newly-created restaurant", (done) => {
  //     request(app)
  //     .post("/restaurants")
  //     .send({
  //         restaurant: {
  //           restaurant_name: 'Test',
  //           img_url: 'Test.jpg',
  //           description: 'This is a test',
  //           type: "Test",
  //           address: 'Test avenue',
  //           rating: 3,
  //           area: 'Test area'
  //         }
  //     })
  //     .end((err, res) => {
  //         expect(res.status).to.eq(201);
  //         expect(res.body).to.be.an("object");
  //         done();
  //     });
  // });
  //
  // it("GET /restaurants/:id should return a 200 status code and an object with restaurant data", (done) => {
  //     request(app)
  //     .get(`/restaurants/${restaurantRecord.id}`)
  //     .end((err, res) => {
  //         expect(res.status).to.eq(200);
  //         expect(res.body).to.be.an("object");
  //         done();
  //     })
  // });
  //
  // it("PUT /restaurants/:id should return 200 status code", (done) => {
  //     request(app)
  //     .put(`/restaurants/${restaurantRecord.id}`)
  //     .send({
  //         restaurant: {
  //             rating: 3
  //         }
  //     })
  //     .end((err, res) => {
  //         expect(res.status).to.eq(200);
  //         done();
  //     });
  // });

});
