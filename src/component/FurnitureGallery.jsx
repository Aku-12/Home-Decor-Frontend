import React from "react";

const FurnitureGallery = () => {
  return (
    <div className=" py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-red-500">
          Check Our Collection
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Our Furniture Gallery
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore Our Gallery of Inspiring Designs
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto rounded-lg"
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1556597249-cd6a997737df?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1554104707-a76b270e4bbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
