const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    "Movie Name": {
        type: String,
        required: true 
    },
    "IMDB Score": {
        type: String,
        required: true
    },
    "The movie image": {
        type: String,
        required: true
    },
    "Movie description": {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Movie', MovieSchema)
