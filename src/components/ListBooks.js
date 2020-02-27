import React, { useState, useEffect } from "react";
import Bookshelf from "./Bookshelf";
import shelves from "../shelvesData";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

const ListBooks = ({
  books,
  changeShelf,
  setShowSearchPage,
  showSearchPage
}) => {
  const { currentlyReading, wantToRead, read } = shelves;
  console.log(showSearchPage);
  return (showSearchPage ? <Redirect to="/search"/> :
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
        {/* <button onClick={() => "setShowSearchPage(true)"}>Add a book</button> */}
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

export default ListBooks;
