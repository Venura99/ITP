const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const registerRouter = require('./routes/register');
const tfeeRouter = require('./routes/tfee');

app.use('/register', registerRouter);
app.use('/tfee', tfeeRouter);

app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});