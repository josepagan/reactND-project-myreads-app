import React, { useState } from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({bookObj}) => {
  console.log(bookObj);
  return (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: null
        }}
      ></div>
      <BookShelfChanger />
    </div>
    <div className="book-title">To Kill a Mockingbird</div>
    <div className="book-authors">Harper Lee</div>
  </div>
)
}
export default Book;
