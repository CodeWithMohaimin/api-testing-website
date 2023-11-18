import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const header = {
      Authorization: `Bearer${import.meta.VITE_REACT_API_BASE_URL}`,
    };
    const url = `http://localhost:1337/api/cards?populate=*`;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { headers: header });
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cardBody">
      {Data.map((card) => (
        <section className="card" key={card.id}>
          <div>
            <img
              className="banner"
              src={`http://localhost:1337${card.attributes.banner.data.attributes.url}`}
              alt={card.attributes.banner.data.attributes.name}
            />
          </div>
          <div className="CardText">
            <h1>{card.attributes.CardTitle}</h1>
            <p>{card.attributes.description}</p>
            <button>{card.attributes.button}</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default App;
