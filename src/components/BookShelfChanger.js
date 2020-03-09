import React, { useState, useEffect } from "react";
import shelves from "../shelvesData";
import * as BooksAPI from "../BooksAPI"

const BookShelfChanger = ({ book, changeShelf }) => {
  const { shelf = "none" } = book;
  const handleSubmit = (value) => {
    changeShelf(book, value)
  }
  
  const optionsList = Object.keys(shelves).map(entry => (
    <option
      value={shelves[entry].id}
      // disabled={book.shelf === shelves[entry].id}
    >
      {shelves[entry].name}
    </option>
  ));

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={shelf}
        onChange={
          (e) => {
            changeShelf(book, e.target.value)
          }
        }
      >
        <option value="move" disabled>
          move book to:
        </option>
        {/* <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option> */}
        {optionsList}
      </select>
      {/* <button onClick={changeShelf}></button> */}
    </div>
  );
};

export default BookShelfChanger;
