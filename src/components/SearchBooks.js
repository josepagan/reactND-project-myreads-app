import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Book from "./Book"

const SearchBooks = ({ showSearchPage, setShowSearchPage, books, searchResults, setSearchResults, changeShelf }) => {
  const [searchInput, setSearchInput] = useState("");
  const [toRender,setToRender] = useState(null)
  const handleChange = e => {setSearchInput(e.target.value)};

  const handleSearchResult = (data) => {
   if (Array.isArray(data)) setSearchResults(data) 

//so...
//if rawdata null... render (...)
//if rawdata: object with error (not found) message... render error
//if rawdata books!! then send books to app to do mergin

  }
    
//i dont think app needs to know about not having nothing to display. 
//if the resoult is not book i have to order searcbook to directly say.. nothing to se
//if the results are books i have to send then to app to get them blended with the books. hopefully.




  



  // useEffect(() => {
  //   BooksAPI.search(searchInput, 20).then(data => data.map(bookObj => {
  //       if const mapped = searchResults.map(el => el.id)(books.map(el => el.id).includes(bookObj.id)) return books.find(el => el.id === bookObj.id)
  //       else return bookObj
  //     }
  //     ))}
  // , [searchInput]);

  // const merge = (data) => {
  //   return data.map(searchObj => 
  
  
        //  {
  //     return books.find(el => el.id === searchObj.id) || searchObj
  //   })
  // }

  // useEffect(() => {
  //   if (Array.isArray(searchResults)) {
  //     console.log(searchResults.map(el => el.title));
  //   }
  // }, [searchResults]);
  

  useEffect(() => {
    if (searchInput) {
      BooksAPI.search(searchInput, 10).then(data => handleSearchResult(data));
    }
  }, [searchInput]);

 return (!showSearchPage ? <Redirect to="/"/> :
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={()=>{setShowSearchPage(false)}}
        >
          Close
        </button>
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
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{searchResults.map(bookObj=> <Book key={bookObj.id} bookObj={bookObj} changeShelf={changeShelf}/>)}</ol>
      </div>
    </div>
  );
};

export default SearchBooks
