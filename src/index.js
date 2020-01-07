const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./errorHandler');
const petsRouter = require('./router/petsRoute');
const storeRouter = require('./router/storeRoute');
const userRouter = require('./router/userRoute');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.get('/', (req, res) => res.send('Hello World!'));

app.use('/pets', petsRouter);
app.use('/store', storeRouter);
app.use('/user', userRouter);

app.use(errorHandler.handleError);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
