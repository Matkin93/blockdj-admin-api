const { PORT = require('./config').PORT } = process.env;
const port = process.env.PORT || 9090


const app = require('./app');

app.listen(port, err => {
    if (err) console.log(err);
    else console.log(`Server listening on port ${PORT}...`);
})