const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Favorite = require('../models/favorite')

describe('Favorite Resource', () => {

//GET /favorites should return 200 status code and array of favorites


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
