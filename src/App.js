import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ListBooks from "./components/ListBooks";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  //books in
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [mergedBooks, setMergedBooks] = useState([]);

  //i think i have to divide the 3 operations, change shelf, 
  const changeShelf = (book, shelf) => {
//first creating a shallow copy
    const updatedBooks = [...books];
    
    //lets find the object in state the state, if not there lets push it there
    let found = updatedBooks.findIndex(element => book.id === element.id);
    if (found === -1) {
      updatedBooks.push(book);
      found = books.length - 1;
      console.log("PFOUND",found)
    }
    //add the necesary properties

    updatedBooks[found].shelf = shelf;
    updatedBooks[found].stamp = Date.now();

    //update server (sever only cares of book.id and the shelf)
    //lets confirm that server is ok and then call setBooks
    BooksAPI.update(book, shelf).then(data => {
      console.log(data);
      BooksAPI.getAll().then(data => {
        setBooks(data);
      });
  
      // if (data[shelf].includes(book.id)) 
      // setBooks(updatedBooks);
    });
  };

  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);

  useEffect(() => {
    const selecting = bookObj =>
      books.find(el => el.id === bookObj.id) || bookObj;
    const merged = searchResults.map(selecting);
    setMergedBooks(merged);
  }, [searchResults]);

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
