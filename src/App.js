import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import BookCard from "./BookCard";

//raJB9IRRPgEkSscOfAfwt09XeQoPxuAr
const API_URL = "http://openlibrary.org/search.json";

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const searchBooks = async (q) => {
    const response = await fetch(`${API_URL}?q=${q}`);
    const data = await response.json();

    const newData = data.docs.slice(0, 20);
    // console.log(newData);
    setBooks(newData);
  };
  useEffect(() => {
    searchBooks("Harry Potter");
  }, []);

  console.log(books);

  return (
    <div className="app">
      <h1>Synomic Books</h1>
      <div className="search">
        <input
          placeholder="Search for a book"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" onClick={() => searchBooks(query)} />
      </div>
      {books?.length > 0 ? (
        <div className="container">
          {books.map((book, i) => (
            <BookCard book={book} key={i} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No relevant books found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;