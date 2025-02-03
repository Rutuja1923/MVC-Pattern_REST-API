const express = require('express');
const {connectMongoDB} = require('./connection'); 

const {logRequestResponse} = require('./middlewares');

const studentRouter = require('./routes/student');

const app = express();
const PORT = 3000;

//connection
const url = 'mongodb://127.0.0.1:27017/student';
connectMongoDB(url);

//middleware - plugin
app.use(express.urlencoded({extended: false}));

//custom middleware
app.use(logRequestResponse('log.txt'));

//router initialization
app.use('/api/student',studentRouter);

//start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});