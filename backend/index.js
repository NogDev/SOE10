const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-jipsb.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/', (request, response) =>{
    return response.json({
        message: 'Hello Nog!'
    });
});

app.listen(3333);