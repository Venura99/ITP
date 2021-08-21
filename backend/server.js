const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const staffRouter = require('./routes/staff');
const salaryRouter = require('./routes/salary');

app.use('/staff', staffRouter);
app.use('/salary', salaryRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});