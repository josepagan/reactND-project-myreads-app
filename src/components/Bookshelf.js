import React from "react";
import Book from "./Book";
import PropTypes, { arrayOf } from 'prop-types';


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
  books: PropTypes.arrayOf(PropTypes.object),
  shelf: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
}

export default Bookshelf;
