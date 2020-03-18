import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ListBooks from "./components/ListBooks";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


    const selecting = bookObj =>
      books.find(el => el.id === bookObj.id) || bookObj;
    const merged = searchResults.map(selecting);
    console.log("merged", merged)

  //i think i have to divide the 3 operations, change shelf, 
  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      console.log(data);
      BooksAPI.getAll().then(data => {
        setBooks(data);
      });
    });
  };

  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);

  // useEffect(() => {
  //   const selecting = bookObj =>
  //     books.find(el => el.id === bookObj.id) || bookObj;
  //   const merged = searchResults.map(selecting);
  //   setBooks(merged);
  // }, [searchResults]);

  // useEffect(() => {
  //   const selecting2 = bookObj =>
  //     books.find(el => el.id === bookObj.id) ? false : true;
  //   const filtered = searchResults.filter(selecting2);
  //   const newBookArray  = [...books,...filtered]
  //   setBooks(newBookArray)
  // }, [searchResults]);

  return (
    <BrowserRouter>
    <div className="app">
    <Route
      exact
      path="/"
      render={props => (
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
              render={props => (
                <SearchBooks
                  {...props}
                  books={merged}
                  showSearchPage={showSearchPage}
                  setShowSearchPage={setShowSearchPage}
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  // inShelves={inShelves}
                  changeShelf={changeShelf}
                />
              )}
                />
                  </div>
                </BrowserRouter>
  );
};

export default App;
