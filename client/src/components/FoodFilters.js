import React from 'react';

const FoodFilters = ({ onFilterChange }) => {
  const handleFilterChange = (filterType) => {
    onFilterChange(filterType);
  };

  return (
    <div>
      <h2>Filters</h2>
      <button onClick={() => handleFilterChange('veg')}>Veg</button>
      <button onClick={() => handleFilterChange('nonVeg')}>Non-Veg</button>
      <button onClick={() => handleFilterChange('dessert')}>Dessert</button>
    </div>
  );
};

export default FoodFilters;
