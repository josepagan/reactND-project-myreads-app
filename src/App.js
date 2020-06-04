import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ListBooks from "./components/ListBooks";

/**
 *
 * Root component
 */
const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [mergedBooks, setMergedBooks] = useState([]);

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      BooksAPI.getAll().then((data) => {
        setBooks(data);
      }).catch(error=> console.log(error));
    }).catch(error=>console.log(error));
  };

  useEffect(() => {
    /** Initial api call to fetch user data and set to state */
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  useEffect(() => {
/**
 * if a book onject is already in the user books state, the later one
  (containing the .shelf property) will be the one returned 
 * @param {Object} bookObj 
 */
    const selecting = (bookObj) =>
      books.find((el) => el.id === bookObj.id) || bookObj;
    const merged = searchResults.map(selecting);
    setMergedBooks(merged);
  }, [searchResults, books]);

  return (
    <BrowserRouter>
      <div className="app">
        <Route
          exact
          path="/"
          render={(props) => (
            <ListBooks
              {...props}
              books={books}
              changeShelf={changeShelf}
              showSearchPage={showSearchPage}
              setShowSearchPage={setShowSearchPage}
              setBooks={setBooks}
            />
          )}
        />
        <Route
          path="/search"
          render={(props) => (
            <SearchBooks
              {...props}
              books={mergedBooks}
              showSearchPage={showSearchPage}
              setShowSearchPage={setShowSearchPage}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              changeShelf={changeShelf}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
