import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import Book from "./components/Book";
import Bookshelf from "./components/Bookshelf";
import "./App.css";
import shelves from "./shelvesData"

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  const omg = () => {
    BooksAPI.update(books[0], "").then(data => console.log(data));
  };

  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);

  //todo:
  //I must format the shelves object properly so it works with the Bookshelf 
  // i must do the filtering so it works properly
  // I must make the selector functional
  // I must 
  return (
    books && (
      <div className="app">
        {showSearchPage ? (
          <SearchBooks setShowSearchPage={setShowSearchPage} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1 onClick={omg}>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf books={books} shelf={shelves.currentlyReading}/>
                <Bookshelf books={books} shelf={shelves.wantToRead}/>
                <Bookshelf books={books} shelf={shelves.read}/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => setShowSearchPage(true)}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default App;
