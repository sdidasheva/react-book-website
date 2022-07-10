export default function PopularBook(book) {
    return (
        <>
            <img className="book_image" src={book.image} alt='book' />
            <p className="book_title">{book.title}</p>
            <p className="book_author">{book.author}</p>
            <p className="book_year">{book.year}</p>
        </>
    )
}