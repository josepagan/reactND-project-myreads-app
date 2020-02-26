import React, { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ListBooks from "./components/ListBooks";

const App = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [books, setBooks] = useState([]);
  // const omg = () => {
  //   BooksAPI.update(books[5], "").then(data => console.log(data));
  // };
  const changeShelf = (book, shelf) => {
    const updatedBooks = [...books];
    const found = updatedBooks.findIndex(element => book.id === element.id);
    updatedBooks[found].shelf = shelf;
    updatedBooks[found].stamp = Date.now();

    BooksAPI.update(book, shelf).then(data => {
      console.log(data);
      if (data[shelf].includes(book.id)) setBooks(updatedBooks);
    });
  };
  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Route
          exact
          path="/"
          render={props => (
            <ListBooks
              {...props}
              books={books}
              changeShelf={changeShelf}
              showSearchPage={showSearchPage}
              setShowSearchPage={setShowSearchPage}
            />
          )}
        />
        {/* <ListBooks books={books} changeShelf={changeShelf} /> */}
        {/* <SearchBooks setShowSearchPage={setShowSearchPage} books={books} /> */}
        <Route
          path="/search"
          render={props => (
            <SearchBooks
              {...props}
              books={books}
              showSearchPage={showSearchPage}
              setShowSearchPage={setShowSearchPage}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
};

// const ListBooks = ({ books, changeShelf }) => {
//   const { currentlyReading, wantToRead, read } = shelves;

//   return (
//     <div className="list-books">
//       <div className="list-books-title">
//         <h1>MyReads</h1>
//       </div>
//       <div className="list-books-content">
//         <div>
//           <Bookshelf
//             books={books}
//             shelf={currentlyReading}
//             changeShelf={changeShelf}
//           />
//           <Bookshelf
//             books={books}
//             shelf={wantToRead}
//             changeShelf={changeShelf}
//           />
//           <Bookshelf books={books} shelf={read} changeShelf={changeShelf} />
//         </div>
//       </div>
//       <div className="open-search">
//         <button onClick={() => "setShowSearchPage(true)"}>Add a book</button>
//       </div>
//     </div>
//   );
// };

export default App;
