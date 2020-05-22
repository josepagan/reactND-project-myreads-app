import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import { Redirect } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({
  showSearchPage,
  setShowSearchPage,
  books,
<<<<<<< HEAD
=======
  inShelves,
  searchResults,
>>>>>>> 90a82286b18202ffb0c64c2916dc07684f68d1cb
  setSearchResults,
  changeShelf,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [emptyQuery, setEmptyQuery] = useState(false);
<<<<<<< HEAD
  const handleChange = (e) => {
=======
  console.log("inshelves",inShelves);
  const handleChange = e => {
>>>>>>> 90a82286b18202ffb0c64c2916dc07684f68d1cb
    setSearchInput(e.target.value);
  };

  const handleSearchResult = (data) => {
    if (data.error === "empty query") setEmptyQuery(true);
    else if (Array.isArray(data)) {
      setEmptyQuery(false);
      setSearchResults(data);
    }
  };

  useEffect(() => {
    if (searchInput) {
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
          <div>sorray mate</div>
        ) : (
          <ol className="books-grid">
            {searchInput === ""
              ? null
<<<<<<< HEAD
              : books.map((bookObj) => (
=======
              //aqui en vez de poner todos los books tengo que poner, los books que salen en results,y despues los results normales
              : books.map(bookObj => (
>>>>>>> 90a82286b18202ffb0c64c2916dc07684f68d1cb
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
