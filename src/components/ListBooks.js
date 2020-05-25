import React from "react";
import Bookshelf from "./Bookshelf";
import shelves from "../shelvesData";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ListBooks = ({
  books,
  changeShelf,
  setShowSearchPage,
  showSearchPage,
}) => {
  const { currentlyReading, wantToRead, read } = shelves;
  return showSearchPage ? (
    <Redirect to="/search" />
  ) : (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            books={books}
            shelf={currentlyReading}
            changeShelf={changeShelf}
          />
          <Bookshelf
            books={books}
            shelf={wantToRead}
            changeShelf={changeShelf}
          />
          <Bookshelf books={books} shelf={read} changeShelf={changeShelf} />
        </div>
      </div>
      <div className="open-search">
        <button
          onClick={() => {
            setShowSearchPage(true);
          }}
        >
          Add a book
        </button>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  changeShelf: PropTypes.func,
  setShowSearchPage: PropTypes.func,
  showSearchPage: PropTypes.bool,
};

export default ListBooks;
