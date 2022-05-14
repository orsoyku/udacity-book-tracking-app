import React from 'react'
import Books from '../components/Books';
const BookShelf = ({books,shelveCategory,onBookShelfChanged}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelveCategory.valueField}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map(book => (<Books onBookShelfChanged={onBookShelfChanged}
             key={book.id} book={book}/>))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf