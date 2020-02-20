import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import Book from "./components/Book";
import Bookshelf from "./components/Bookshelf";
import "./App.css";

//todo .. must learn about the css in js thing,
//I think it would suit nicely here
const shelves = {
  shelf1: {
    id: "shelf1",
    name: "read"
    // books:[]
  },
  shelf2: {
    id: "shelf2",
    name: "to read"
    // books:[]
  },
  shelf3: {
    id: "shelf3",
    name: "whatever"
    // books:["book1"]
  }
};


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
                <Bookshelf books={books} shelf="currentlyReading"/>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid"></ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid"></ol>
                  </div>
                </div>
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
