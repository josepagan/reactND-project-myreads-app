import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import { Redirect } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

/** Display input and search results in a grid 
 * @component
*/
const SearchBooks = ({
  showSearchPage,
  setShowSearchPage,
  books,
  setSearchResults,
  changeShelf,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [emptyQuery, setEmptyQuery] = useState(false);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  /** search results handler. If results have .error property it will set
   * its emptyQuery state to true, if the result is an array of books it will
   * update SearchResults state on App
   */
  const handleSearchResult = (data) => {
    if (data.error === "empty query") setEmptyQuery(true);
    else if (Array.isArray(data)) {
      setEmptyQuery(false);
      setSearchResults(data);
    }
  };

  useEffect(() => {
    if (searchInput) {
      /**search query call */
      BooksAPI.search(searchInput, 10).then((data) => handleSearchResult(data));
    }
  }, [searchInput]);

  return !showSearchPage ? (
    <Redirect to="/" />
  ) : (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => {
            setShowSearchPage(false);
          }}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            value={searchInput}
            type="text"
            placeholder="Search by title or author"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        {emptyQuery ? (
          <div>No entries found with {searchInput}...</div>
        ) : (
          <ol className="books-grid">
            {searchInput === ""
              ? null
              : books.map((bookObj) => (
                  <Book
                    key={bookObj.id}
                    bookObj={bookObj}
                    changeShelf={changeShelf}
                  />
                ))}
          </ol>
        )}
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  changeShelf: PropTypes.func,
  setShowSearchPage: PropTypes.func,
  showSearchPage: PropTypes.bool,
}

export default SearchBooks;
