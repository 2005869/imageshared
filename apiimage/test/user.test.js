let app = require('../src/app');
let supertest = require('supertest');
let request = supertest(app);

describe('Sign up user', () => {
    test('Should sign up an user with success', () => {

        //generate an email
        let time = Date.now();
        let email = `${time}@fabiano.com`

        let user = {
            name: 'Fabiano',
            email,
            password: '12345678'
        }

        return request.post('/user').send(user).then(res => {
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);
        }).catch(err => {
            console.log(err);
        });
    });
});