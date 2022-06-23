import React, { useState, useEffect } from "react";

const COVER_URL = "https://covers.openlibrary.org/b/isbn/";

const BookCard = ({ book }) => {
  const [isbn, setIsbn] = useState([]);

  useEffect(() => {
    setIsbn(book.isbn);
  }, [book.isbn]);

  return (
    <div className="book">
      <div>
        <p>{book.first_publish_year}</p>
      </div>
      <div>
        <img
          src={isbn ? `${COVER_URL}${isbn[isbn.length - 1]}-M.jpg` : "400.png"}
          alt={book.title}
        />
      </div>

      <div>
        <span>{book.author_name}</span>
        <h3>{book.title}</h3>
      </div>
    </div>
  );
};

export default BookCard;
