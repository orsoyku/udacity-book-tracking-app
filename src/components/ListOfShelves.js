import React from "react";
import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton";

const ListOfShelves = ({ books, onBookShelfChanged, shelveCategories }) => {
  const filterBooksByShelf = (shelf) => {
    return books.filter((book) => book.shelf === shelf.keyField);
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelveCategories.map((category) => (
            <BookShelf
              key={category.keyField}
              books={filterBooksByShelf(category)}
              shelveCategory={category}
              onBookShelfChanged={onBookShelfChanged}
            />
          ))}
        </div>
        <SearchButton />
      </div>
    </div>
  );
};

export default ListOfShelves;
