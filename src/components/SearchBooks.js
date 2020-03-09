import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({
  showSearchPage,
  setShowSearchPage,
  books,
  searchResults,
  setSearchResults,
  changeShelf
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [emptyQuery, setEmptyQuery] = useState(false);
  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSearchResult = data => {
    if (data.error === "empty query") setEmptyQuery(true);
    else if (Array.isArray(data)) {
      setEmptyQuery(false);
      setSearchResults(data);
      
    }
  };

 

  useEffect(() => {
    if (searchInput) {
      BooksAPI.search(searchInput, 10).then(data => handleSearchResult(data));
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
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
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
          <div>sorray mate</div>
        ) : (
          <ol className="books-grid">
            {searchInput === ""
              ? null
              : books.map(bookObj => (
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

export default SearchBooks;
