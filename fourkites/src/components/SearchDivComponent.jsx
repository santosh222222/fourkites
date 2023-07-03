import React, { useState } from 'react';
import SearchComponent from './SearchComponent';

const SearchDivComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayDiv, setDisplayDiv] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setDisplayDiv(false); // Reset display when input changes
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setDisplayDiv(true);
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {
      
      displayDiv && 
      
     <div>

<SearchComponent />

     </div>
      
      
      }


    </div>
  );
};

export default SearchDivComponent;
