import React, { useEffect, useState } from "react";
import axios from 'axios';
import Book from "./book";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};
export default function BookCard() {
    const [books, setBooks] = useState();

    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books))
    }, [])
    console.log(books)


    return (
        <div className="bookCards">
            {books && books.map((book, index) => {
                return (
                    <Book book={book} key={index} />
                )
            })}
        </div>
    )
}