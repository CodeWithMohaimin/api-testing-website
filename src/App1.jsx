import React, { useState, useEffect } from "react";

const App1 = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url =
      "https://codewithmohaimin.github.io/creating-serverless-api/data.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img className="images" src={post.image} alt="cover" />
          <li className="title">
            Post number__{post.id}__{post.title}
          </li>
          <p className="desc">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App1;
