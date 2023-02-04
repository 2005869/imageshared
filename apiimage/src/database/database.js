const mongoose = require('mongoose');

const serverHOST = 'localhost';
const serverPORT = 27017;
const databaseName = 'pics'
const databaseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${serverHOST}:${serverPORT}/${databaseName}`, databaseConfig).then(() => {
    //console.log('Success connecting to database');
}).catch(err => {
    console.log('Fail connecting to database ' + err);
});

module.exports = mongoose;