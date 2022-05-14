import "./App.css";
import { useState, useEffect } from "react";
import ListOfShelves from "./components/ListOfShelves";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import { shelveCategories } from "./shared/shelveCategories";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((response) => {
      setBooks(response);
    });
  }, []);

  const onBookShelfChanged = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      if (!response) {
        return;
      }

      if (shelf !== "none") {
        if (book.shelf === "none") {
          /* New added book */
          book.shelf = shelf;
          setBooks([...books, book]);
        } else {
          const updatedBooks = books.map((eachBook) => {
            if (eachBook.id === book.id) {
              eachBook["shelf"] = shelf;
            }
            return eachBook;
          });
          setBooks(updatedBooks);
        }
      } else {
        const newBookList = books.filter(
          (deletedBook) => deletedBook.id !== book.id
        );
        setBooks(newBookList);
      }
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ListOfShelves
              shelveCategories={shelveCategories}
              onBookShelfChanged={onBookShelfChanged}
              books={books}
            />
          }
        />
        <Route
          path="/search"
          exact
          element={
            <SearchBooks
              books={books}
              onBookShelfChanged={onBookShelfChanged}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
