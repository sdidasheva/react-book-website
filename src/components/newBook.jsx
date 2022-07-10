export default function NewBook(newbook) {
    return (
        <>
            <img className="book_image" src={newbook.image} alt='book' />
            <p className="book_title">{newbook.title}</p>
            <p className="book_author">{newbook.author}</p>
            <p className="book_year">{newbook.year}</p>
        </>
    )
}