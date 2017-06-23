const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Restaurant = require('../models/restaurant');
const Favorite = require('../models/favorite');
const JwtSetup = require("./jwt_setup");

describe('Favorite Resource', () => {

  let restaurantRecord;
  let favoriteRecord;

  let jwtToken;

    before((done) => {
        JwtSetup()
        .then((token) => {
            jwtToken = token;
            done();
        })
        .catch((err) => {
            done(err);
        });
    });

    before((done) => {
      Restaurant
      .create({
        restaurant_name: 'Test',
        img_url: 'Test.jpg',
        description: 'This is a test',
        type: 'Test',
        address: 'Test avenue',
        rating: 3,
        area: 'Test area'
      }, {id: 1})
      .then((restaurant) => {
        restaurantRecord = restaurant;
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      })
    })

//GET /favorites should return 200 status code and array of favorites
//GET /favorites/:id should resturn 200 status code and object representing a specific favorite restaurant
//POST /favorites should return 201 and object representing new favorite restaurant
//PUT /favorites/:id should return 200
//DELETE /favorites/:id should return 200


it('GET /favorites should return 200 status code and an array of favorites', (done) => {
      request(app)
      .get('/favorites')
      .set({
        "Authorization": jwtToken
        })
      .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.an('array');
          done();
      });
  });

it('POST /favorites should return 201 status code and an object of the newly-created favorite restaurant', (done) => {
    request(app)
    .post('/favorites')
    .set({
          "Authorization": jwtToken
      })
    .send({
        restaurant_id: restaurantRecord.id
    })
    .end((err, res) => {
        expect(res.status).to.eq(201);
        expect(res.body).to.be.an('object');
        done();
    });
});

it('GET /favorites/:id should return a 200 status code and an object with favorite restaurant data', (done) => {
    request(app)
    .get(`/favorites/${favoriteRecord.id}`)
    .set({
      "Authorization": jwtToken
     })
    .end((err, res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.be.an('object');
        done();
    })
});


it('PUT /favorites/:id should return 200 status code', (done) => {
    request(app)
    .put(`/favorites/${favoriteRecord.id}`)
    .set({
          "Authorization": jwtToken
      })
    .send({
        restaurant: {
            rating: 4
        }
    })
    .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
    });
});

it("DELETE /favorites/:id should return a 200 status code", (done) => {
    request(app)
    .delete(`/favorites/${favoriteRecord.id}`)
    .set({
        "Authorization": jwtToken
    })
    .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
    });
});


});
