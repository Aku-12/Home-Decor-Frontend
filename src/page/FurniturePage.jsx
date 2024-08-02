import React, { useState } from 'react';
import FurnitureList from '../component/FurnitureList';

function FurniturePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className=''>
      <div className="mb-6 mt-6 mx-auto w-[30%]">
        <input
          type="text"
          placeholder="Search furniture by name..."
          className="w-full p-2 border rounded-full border-gray-300"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <FurnitureList searchTerm={searchTerm} />
    </div>
  );
}

export default FurniturePage;