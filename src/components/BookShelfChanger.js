import React, { useState } from "react";
import shelves from "../shelvesData";

const BookShelfChanger = ({book, changeShelf }) => {
  const [shelf,newShelf] = useState(book.shelf ? book.shelf : "none")
  const backgroundColor = shelf === "none" ? "gray" : "#60ac5d"
  
  const optionsList = Object.keys(shelves).map((entry) => (
    <option value={shelves[entry].id}>{shelves[entry].name}</option>
  ));

  return (
    <div className="book-shelf-changer"
    style={{backgroundColor}}
    >
      <select
        defaultValue={shelf}
        onChange={(e) => {
          //I need to update the state to force a re-render in order to update color
          newShelf(e.target.value)
          changeShelf(book, e.target.value)
          
        }}
      >
        <option value="move" disabled>
          move book to:
        </option>
        {optionsList}
      </select>
    </div>
  );
};

export default BookShelfChanger;
