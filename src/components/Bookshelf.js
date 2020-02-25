import React from "react";
import Book from "./Book"

const Bookshelf = ({books, shelf, changeShelf}) => {
    const booksGridList = books
    .filter((bookObj)=>bookObj.shelf === shelf.id)
    .sort((a,b)=>{
      if (a.stamp === undefined || a.stamp < b.stamp) return -1
      else return 1
    })
    .map(bookObj=> <Book key={bookObj.id} bookObj={bookObj} changeShelf={changeShelf}/>)
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {booksGridList}
        </ol>
      </div>
    </div>
  );
};
export default Bookshelf;
