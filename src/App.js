
import { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import Header from './components/Header';
import axios from 'axios';
import SearchBar from './components/SearchBar';

function App() {
  const [searchValue, setSearchValue] = useState('');

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <>
      <Header  />
      <SearchBar onSearch={handleSearch} />

      <BookList searchQuery={searchValue} />
    </>
  );

}

export default App;
