import React from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

/**
 * Displays a specific set of books depending on the shelf property contained
 * in the book object
 * @component
 */
const Bookshelf = ({ books, shelf, changeShelf }) => {
  const booksGridList = books
    .filter((bookObj) => bookObj.shelf === shelf.id)
    .map((bookObj) => (
      <Book key={bookObj.id} bookObj={bookObj} changeShelf={changeShelf} />
    ));
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{booksGridList}</ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  /**Array of books objects */
  books: PropTypes.arrayOf(PropTypes.object),
  /** shelf data object */
  shelf: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
}

export default Bookshelf;
