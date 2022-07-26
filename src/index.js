require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((con) => {
    app.listen(app.get('port'), () => {
        console.log(`Server on port: ${con.connection.name}`)
    })
})
.catch(err => console.log(err))