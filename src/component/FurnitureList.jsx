import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FurnitureCard from './FurnitureCard';

const FurnitureList = ({ searchTerm, limit }) => {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    fetchFurniture();
  }, []);

  const fetchFurniture = async () => {
    try {
      const response = await axios.get('http://localhost:8080/furniture/get');
      setFurniture(response.data.data);
    } catch (error) {
      console.error('Failed to fetch furniture:', error);
    }
  };

  const filteredFurniture = furniture
    .filter((item) =>
      item && item.furnitureName && 
      item.furnitureName.toLowerCase().includes((searchTerm || '').toLowerCase())
    )
    .slice(0, limit); 

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredFurniture.map((item) => (
          <FurnitureCard
            key={item.furnitureId}
            furniture={{
              ...item,
              imageUrl: `http://localhost:8080/furniture/image/${item.furnitureId}`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FurnitureList;