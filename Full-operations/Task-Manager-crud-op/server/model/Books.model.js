const { default: mongoose } = require("mongoose");

const BookModel = mongoose.Schema({
    BookId: { type: Number, required: true, unique: true },
    Book_Name: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: Number, required: true },
    Category: { type: String },
    Author: { type: String },
    DOP: { type:Date}
},{Timestamp:true})
const BookModels = mongoose.model('BookModel', BookModel);

module.exports = BookModels;