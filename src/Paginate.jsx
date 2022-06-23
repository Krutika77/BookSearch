import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import ReactPaginate from "react-paginate";
//import App from "./App.js";
import BookCard from "./BookCard";

// const items = [{ books }];

function Paginate({ books }) {
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(books.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(books.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, books]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems?.length > 0 ? (
        <div className="container">
          {currentItems.map((currentItems, i) => (
            <BookCard book={currentItems} key={i} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No relevant books found.</h2>
        </div>
      )}
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Paginate;
