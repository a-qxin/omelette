const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema + model

const cardsSchema = new Schema ({
    title: String,
    description: String, 
    photo: {
        type: String,
        get: v => `${root}${v}`
    },
    numChildren: Number,
    star: Boolean
});

const cards = mongoose.model('cards'.cardsSchema);

module.exports = Cards;