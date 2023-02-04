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


    test('Should prevent that user can sign up with blank data', () => {
        let user = {
            name: '',
            email: '',
            password: ''
        }

        return request.post('/user').send(user).then(res => {
            expect(res.statusCode).toEqual(400);
        }).catch(err => {
            console.log(err);
        });
    });

    test('Must prevent a user from registering with an existing email', () => {
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

            return request.post('/user').send(user).then(res => {
                expect(res.statusCode).toEqual(400);
                expect(res.body.error).toEqual('E-mail already registered');
    
                
    
            }).catch(err => {
                console.log(err);
            });

        }).catch(err => {
            console.log(err);
        });
    });
});