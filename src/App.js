import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import Book from "./components/Book";
import Bookshelf from "./components/Bookshelf";
import "./App.css";
import shelves from "./shelvesData";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  const {currentlyReading, wantToRead, read} = shelves;
  // const omg = () => {
  //   BooksAPI.update(books[5], "").then(data => console.log(data));
  // };
  const changeShelf = (book,shelf) => {
    const updatedBooks = [...books]
    const found = updatedBooks.findIndex(element => book.id === element.id)
    updatedBooks[found].shelf = shelf;
    updatedBooks[found].stamp = Date.now();

    //to be able to sort books depending on last...
    //I could change the state to 3 different arrays
    //maybe a simpler way would be to create the book.position=
    //then on the render make a sort()based on book.position.
    //
    //To find out the book.position I have to find out the number of books with that shelf. Probaly a reduce?
    // I just need to make an special sorting function to .sort()
    
    BooksAPI.update(book, shelf).then(data => {
      console.log(data);
      if (data[shelf].includes(book.id)) setBooks(updatedBooks)
       //aqui inventarse un modo de cambiar el state para que salte automaticamente
      
    })
  }
  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);
  //todo:
  // I must make the selector functional
  return (
    books && (
      <div className="app">
        {showSearchPage ? (
          <SearchBooks setShowSearchPage={setShowSearchPage} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {/* <button onClick={omg}>Test button</button> */}
            <div className="list-books-content">
              <div>
                <Bookshelf books={books} shelf={currentlyReading} changeShelf={changeShelf}/>
                <Bookshelf books={books} shelf={wantToRead} changeShelf={changeShelf}/>
                <Bookshelf books={books} shelf={read} changeShelf={changeShelf}/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => setShowSearchPage(true)}>
                Add a book
              </button>
            </div>
          </div>
        )}
        </div>
    )
  );
};

export default App;
