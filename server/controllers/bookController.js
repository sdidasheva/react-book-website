const Book = require("../models/bookModel");


const getAllBooks = async(req, res, next) => {
    let books;
    try{
        books = await Book.find();
    } catch(err) {
        console.log(err);
    }

    if(!books) {
        return res.status(404).json({message: "No books found"});
    }
    return res.status(200).json({books})
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ book });
};

const addBook = async(req, res, next) => {
    const {title, author, year, genre, content} = req.body;
    let book;
    try {
        book = new Book({
            title,
            author,
            year,
            genre,
            content
        });
        await book.save();
    } catch(err) {
        console.log(err);
    }

    if (!book) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ book });
};

const updateBook = async(req, res, next) => {
    const id = req.params.id;
    const {title, author, year, genre, content} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            title,
            author,
            year,
            genre,
            content
        });
        book = await book.save();
    } catch(err) {
        console.log(err);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
    }
        return res.status(200).json({ book });
};

const deleteBook = async(req, res) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    } catch(err) {
        console.log(err)
    }

    if (!book) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
        return res.status(200).json({ message: "Product Successfully Deleted" });
}

exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
