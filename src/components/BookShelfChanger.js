import React, { useState } from "react";
import shelves from "../shelvesData";

const BookShelfChanger = ({ book, changeShelf }) => {
  const [shelfValue, setShelfValue] = useState(book.shelf);
  const handleSubmit = () => {
    console.log("shelfvalue", shelfValue)
    changeShelf()
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
        defaultValue={shelfValue}
        onChange={
          (e) => {
            {/* console.log(e.target.value) */}
            changeShelf(book, e.target.value)
            {/* setShelfValue(e.target.value); */}
            {/* handleSubmit(); */}
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
