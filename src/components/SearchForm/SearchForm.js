import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, suggestions }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchSuggestion = (searchTerm) => {
    setSearchQuery(searchTerm);
  };
  const handleSearchClick = () => {
    onSearch(searchQuery);
    setSearchQuery("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="search-drop">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="dropdown">
        {suggestions
          .filter((item) => {
            const searchTerm = searchQuery.toLowerCase();
            const suggestion = item.toLowerCase();
            return (
              searchTerm &&
              suggestion.includes(searchTerm) &&
              item !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              className="dropdown-row"
              onClick={() => handleSearchSuggestion(item)}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchForm;
