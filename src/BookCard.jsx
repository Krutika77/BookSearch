import React, { useState, useEffect } from "react";

const COVER_URL = "https://covers.openlibrary.org/b/isbn/";

const BookCard = ({ book }) => {
  const [isbn, setIsbn] = useState([]);
  // const [cover, setCover] = useState("");
  // //console.log(isbn);

  useEffect(() => {
    setIsbn(book.isbn);
  }, [book.isbn]);

  // const fetchCover = () => {
  //   if (isbn) {
  //     return axios
  //       .get(`${COVER_URL}${isbn[isbn.length - 1]}-M.jpg`, {
  //         responseType: "arraybuffer",
  //       })
  //       .then((response) =>
  //         Buffer.from(response.data, "binary").toString("base64")
  //       );
  //   } else {
  //     return errorImage;
  //   }
  // };

  //   useEffect(() => {
  //     if (isbn) {
  //       axios
  //         .get(`${COVER_URL}${isbn[isbn.length - 1]}-M.jpg`)
  //         .then((res) => {
  //           //   setCover(res.data);
  //           console.log(res.data);
  //         })
  //         .catch((err) => {
  //           setCover(errorImage);
  //         });
  //     }
  //   }, [isbn]);

  // setTimeout(() => {
  //   console.log(fetchCover());
  // }, 5000);
  // //   console.log(cover);

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
