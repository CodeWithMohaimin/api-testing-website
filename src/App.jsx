import React, { useState, useEffect } from "react";
import Search from "./components/Search";

const App = () => {
  const searchInitValue = "phone";
  const [posts, setPosts] = useState([]);
  const [searchData, setSearchData] = useState(searchInitValue);

  useEffect(() => {
    const url = `https://amazon-api-b8fv.onrender.com/search/${searchData}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Search />
      <div className="container">
        {posts.map((post) => (
          <div className="post" key={post.position}>
            <img className="cover" src={post.image} alt="cover" />
            <h1>{post.position}</h1>
            <p>{post.name}</p>
            <p>Ratings: {post.stars}</p>
            <i>Price: {post.price_string}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
