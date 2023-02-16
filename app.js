const express = require('express');
const app = express();
const userRouter = require('./src/user/userRoute');
const HistoryRouter = require('./src/history/historyRoute');

app.use(express.json());
app.use('/v1', userRouter);
app.use('/v1/history', HistoryRouter);

module.exports = app;