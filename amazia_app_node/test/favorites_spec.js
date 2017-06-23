const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Favorite = require('../models/favorite')

describe('Favorite Resource', () => {

//GET /favorites should return 200 status code and array of favorites
//GET /favorites/:id should resturn 200 status code and object representing a specific favorite restaurant
//POST /favorites should return 201 and object representing new favorite restaurant
//PUT /favorites/:id should return 200
//DELETE /favorites/:id should return 200


it('GET /favorites should return 200 status code and an array of favorites', (done) => {
      request(app)
      .get('/favorites')
      .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.an('array');
          done();
      });
  });


});
