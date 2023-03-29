import React, { useState } from "react";
const searchInitValue = "";

const Search = () => {
  const [search, setSearch] = useState(searchInitValue);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        name="searchBar"
        placeholder="search here"
        value={search}
        onChange={handleOnChange}
      />

      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;
