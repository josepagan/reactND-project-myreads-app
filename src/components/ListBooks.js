import React from "react";
import Bookshelf from "./Bookshelf";
import shelves from "../shelvesData";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

/** Display a set of Bookshelf components and a link to search page
 * @component
 */
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
  /**Array of books objects */
  books: PropTypes.arrayOf(PropTypes.object),
  /**Event handling funciton to change shelf of book */
  changeShelf: PropTypes.func.isRequired,
  /**Function to handle the search button on-click event, altering state */
  setShowSearchPage: PropTypes.func.isRequired,
  /**App state that determines  whether SearchBooks or ListBooks is shown */
  showSearchPage: PropTypes.bool.isRequired,
};

export default ListBooks;
