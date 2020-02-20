import React from "react";
import Book from "./Book"

const Bookshelf = ({books, shelf}) => {
    const booksGridList = books.map(bookObj=> <li><Book bookObj={bookObj}/></li>)
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {booksGridList}
        </ol>
      </div>
    </div>
  );
};
export default Bookshelf;
