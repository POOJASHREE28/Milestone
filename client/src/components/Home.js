import React, { useState, useEffect } from 'react';
// import { getAllFoods } from '../api'; // Assuming you have an API utility

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch the list of foods from the server
    getAllFoods()
      .then((data) => setFoods(data))
      .catch((error) => console.error('Error fetching foods:', error));
  }, []);

  return (
    <div>
      <h1>Food Items</h1>
      <ul>
        {foods.map((food) => (
          <li key={food._id}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Price: ${food.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
