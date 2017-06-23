const request = require('supertest');

const app = require('../index');
const User = require('../models/user');

module.exports = () => {
    return new Promise((resolve, reject) => {
        User
        .findByEmail({
            email: 'matt@matt.com'
        })
        .then((user) => {
            if (user) {
                return;
            } else {
                return User
                .create({
                    first_name: 'Matt',
                    last_name: 'Gersh',
                    email: 'matt@matt.com',
                    password: 'matt'
                })
                .then((newUser) => {
                    return newUser;
                })
                .catch((err) => {
                    reject(err);
                });
            }
        })
        .then(() => {
            request(app)
            .post('/users/login')
            .send({
                'user': {
                    email: 'matt@matt.com',
                    password: 'matt'
                }
            })
            .end((err, res) => {
                if (err) {
                    return reject(err);
                }
                resolve(res.body.token);
            });
        })
        .catch((err) => {
            reject(err);
        });
    });
}
