import React, { useState } from "react";

const BookShelfChanger = ({ onBookShelfChanged, book }) => {
  const [shelf, setShelf] = useState(book.shelf);
  const handleChange = (event) => {
    setShelf(event.target.value);
    onBookShelfChanged(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={shelf}>
        <option value="default" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
