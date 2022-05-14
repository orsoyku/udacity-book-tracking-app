import React, { useState } from "react";
import { Link } from "react-router-dom";
import Books from "../components/Books";
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ({ onBookShelfChanged, books }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchedBook, setSearchedBook] = useState("");

  const handleChange = (event) => {
    const searchedBookName = event.target.value;
    setSearchedBook(searchedBookName);
    if (searchedBookName && searchedBookName.length > 0) {
      BooksAPI.search(searchedBookName).then((response) => {
        if (response.error) {
          setSearchResults([]);
        } else {
          response.forEach((res) => {
            books.forEach((book) => {
              if (res.id === book.id) {
                res.shelf = book.shelf;
              }
            });
          });
          setSearchResults(response);
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  searchResults.forEach((searchResult) => {
    books.forEach((book) => {
      if (searchResult.id === book.id) {
        searchResult["shelf"] = book["shelf"];
      }
    });
    if (!searchResult.shelf) {
      searchResult.shelf = "none";
    }
  });

  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={handleChange}
              value={searchedBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.length > 0 &&
              searchResults.map((book) => (
                <Books
                  key={book.id}
                  book={book}
                  onBookShelfChanged={onBookShelfChanged}
                />
              ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default SearchBooks;
