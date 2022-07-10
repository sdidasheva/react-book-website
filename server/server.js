const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", require('./routes/bookRoute'))

mongoose.connect("mongodb+srv://ddsamals:sam97@cluster0.o2tag.mongodb.net/readBooks").then(()=> console.log("Connected to Database"))

app.listen(5000, function() {
    console.log('server is running on port 5000')
})