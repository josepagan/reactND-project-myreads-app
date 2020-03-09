import React, { useState } from "react";
import shelves from "../shelvesData";

const BookShelfChanger = ({ book, changeShelf }) => {
  const { shelf = "none" } = book;
  const [shelfValue, setShelfValue] = useState(book.shelf);
  const handleSubmit = (value) => {
    changeShelf(book, value)
  }

useEffect(() => {
  BooksAPI.update(book, shelf).then(data =>console.log(data))
}, [shelfValue])

  
  const optionsList = Object.keys(shelves).map(entry => (
    <option
      value={shelves[entry].id}
      // disabled={book.shelf === shelves[entry].id}
    >
      {shelves[entry].name}
    </option>
  ));

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={shelf}
        onChange={
          (e) => {
            // changeShelf(book, e.target.value)
            // console.log(e.target.value)
             setShelfValue(e.target.value);
            //  handleSubmit(e.target.value);
          }
        }
      >
        <option value="move" disabled>
          move book to:
        </option>
        {/* <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option> */}
        {optionsList}
      </select>
      {/* <button onClick={changeShelf}></button> */}
    </div>
  );
};

export default BookShelfChanger;
