import React, { useState } from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ bookObj }) => {
  if (!bookObj) return null;
  const { title, authors, imageLinks } = bookObj;
  const { thumbnail } = imageLinks;
  console.log("thumbnail...",thumbnail)
  return (
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
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
    </div>
  );
};
export default Book;
