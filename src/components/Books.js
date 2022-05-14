import React from "react";
import BookShelfChanger from "./BookShelfChanger";

const Books = ({ book,onBookShelfChanged }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail
              })`,
            }}
          ><BookShelfChanger book={book} onBookShelfChanged={onBookShelfChanged}/></div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
           {book.authors && book.authors.join(" / ")}
        </div>
      </div>
    </li>
  );
};

export default Books;
