let app = require('./app');
const PORTSERVER = 3131;

app.listen(PORTSERVER, () => {
    console.log(`Server run in port ${PORTSERVER}`);
});