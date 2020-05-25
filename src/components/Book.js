import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';

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
              backgroundImage: `url(${thumbnail})`
            }}
          ></div>
          <BookShelfChanger book={bookObj} shelf={shelf} changeShelf={changeShelf}/>
        </div>
        <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookObj: PropTypes.object,
  changeShelf: PropTypes.func
}
export default Book;
