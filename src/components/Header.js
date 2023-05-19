import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';


function Header() {


    return (
        <div className='header-container'>
            <header>
                <div className='logo'>
                    <p>Book Recommandation App</p>
                </div>
                <div className='navbar'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/search'>Search</a></li>
                        <li><a href='/favt'>Favourites</a></li>
                        <li><a href='/about'>About</a></li>
                    </ul>
                </div>
            </header>
        </div>
    ) 
}

export default Header;