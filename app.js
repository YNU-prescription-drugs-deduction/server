const express = require('express');
const app = express();
const userRouter = require('./src/user/userRoute');
const itemRouter = require('./src/item/itemRoute');

app.use(express.json());
app.use('/v1', userRouter);
app.use('/v1/item', itemRouter);

module.exports = app;