let app = ('../src/app');
let supertest = require('supertest');
let request = supertest(app);

test('Should response in port 3131', () => {
    return request.get('/').then(res => {
        let status = res.statusCode;
        expect(status).toEqual(200);
    }).catch(err => {
        console.log(err);
    });
});