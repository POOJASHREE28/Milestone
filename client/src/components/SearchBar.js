import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
