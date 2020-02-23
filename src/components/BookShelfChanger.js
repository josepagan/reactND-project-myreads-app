import React, { useState } from "react";
import shelves from "../shelvesData"

const BookShelfChanger = ({ book }) => {
  const optionsList = Object.keys(shelves)
.map(entry => <option value={shelves[entry].id}>{shelves[entry].name} </option>)
console.log(optionsList)
  return (<div className="book-shelf-changer">
    <select>
      <option value="move" disabled>
        move book to:
      </option>
      {/* <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option> */}
    </select>
  </div>);
};

export default BookShelfChanger;
