const mongoose = require('mongoose');

const bookSchema = {
    title: String,
    author: String,
    year: String,
    genre: String,
    content: String
}

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;