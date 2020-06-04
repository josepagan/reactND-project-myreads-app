import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";
/**
 * Book component. It renders the book information and contains
 * its BookShelfChanger compomenent
 * @component
 *
 */
const Book = ({ bookObj, changeShelf }) => {
  if (!bookObj) return null;
  const { title, authors, imageLinks } = bookObj;
  const { thumbnail } = imageLinks || {};
  const { shelf = "none" } = bookObj;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>
          <BookShelfChanger
            book={bookObj}
            shelf={shelf}
            changeShelf={changeShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  /**
   * book individual object
   */
  bookObj: PropTypes.shape({
    id:PropTypes.string.isRequired
  }),
  /**
   * handler function to change shelf
   */
  changeShelf: PropTypes.func.isRequired,
};
export default Book;
