import React, { useState, useEffect } from "react";
import * as BooksAPI from '../BooksAPI'

const SearchBooks = ({ setShowSearchPage, books }) => {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, SetSearchResults] = useState([])
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  // useEffect(() => {
  //   BooksAPI.search(searchInput, 20).then(data => data.map(bookObj => {
  //       if const mapped = searchResults.map(el => el.id)(books.map(el => el.id).includes(bookObj.id)) return books.find(el => el.id === bookObj.id)
  //       else return bookObj
  //     }
  //     ))}
  // , [searchInput]);

  // const merge = (data) => {
  //   return data.map(searchObj => {
  //     return books.find(el => el.id === searchObj.id) || searchObj
  //   })
  // }

  useEffect(() => {
    if (Array.isArray(searchResults)) {
      const idList = searchResults.map(el => el.id)
    }
  }, [searchResults])

  useEffect(() => {
    BooksAPI.search(searchInput, 10).then(data => SetSearchResults(data))
  }, [searchInput])
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => setShowSearchPage(false)}>Close</button>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            value={searchInput}
            type="text"
            placeholder="Search by title or author"
            onChange={handleChange} />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{idList}</ol>
      </div>
    </div>
  )
};

export default SearchBooks;
