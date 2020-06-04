import React, { useState } from "react";
import shelves from "../shelvesData";
import PropTypes from "prop-types";
/**
 * Control component that allows users to move books between shelves
 * @component
 */
const BookShelfChanger = ({ book, changeShelf }) => {
  const [shelf, newShelf] = useState(book.shelf ? book.shelf : "none");
  const backgroundColor = shelf === "none" ? "gray" : "#60ac5d";
  const optionsList = Object.keys(shelves).map((entry) => (
    <option key={shelves[entry].id} value={shelves[entry].id}>
      {shelves[entry].name}
    </option>
  ));

  return (
    <div className="book-shelf-changer" style={{ backgroundColor }}>
      <select
        defaultValue={shelf}
        onChange={(e) => {
          //I need to update the state to force a re-render in order to update color
          newShelf(e.target.value);
          changeShelf(book, e.target.value);
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

BookShelfChanger.propTypes = {
  /**
   * object containing single book data
   */
  book: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  /**
   * Handler function to change shelf
   */
  changeShelf: PropTypes.func,
};
export default BookShelfChanger;
