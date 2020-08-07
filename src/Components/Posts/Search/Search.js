import React, { useState } from 'react';
import './Search.css';
import Homebar from '../../Homebar/Homebar';
import Footer from '../../Footer/Footer';
import Posts from '../../Posts/Posts';
import SearchResults from './SearchResults/SearchResults';
import Searchbar from './Searchbar/Searchbar';


const Search = () => {
    return (
        <div className='Search'>
            <Homebar />

            <Searchbar />

            {/* <SearchResults />    */}

            <Footer />
        </div>
    )
}


export default Search;












































