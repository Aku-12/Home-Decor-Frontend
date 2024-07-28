import React, { useState, useEffect } from "react";
import axios from "axios";
import FormModal from "./FormModal";

const Furniture = () => {
  const [furnitureData, setFurnitureData] = useState({
    furnitureName: "",
    details: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [furnitureList, setFurnitureList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFurnitureId, setEditFurnitureId] = useState(null);

  useEffect(() => {
    fetchFurniture();
  }, []);

  const fetchFurniture = async () => {
    try {
      const response = await axios.get("http://localhost:8080/furniture/get");
      setFurnitureList(response.data.data);
    } catch (error) {
      console.error("Failed to fetch furniture:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFurnitureData({ ...furnitureData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "furniture",
      new Blob([JSON.stringify(furnitureData)], { type: "application/json" })
    );
    formData.append("image", image);

    try {
      if (editFurnitureId) {
        await axios.put(
          `http://localhost:8080/furniture/update/${editFurnitureId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        await axios.post("http://localhost:8080/furniture/save", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      window.location.reload();
      fetchFurniture();
      setIsModalOpen(false);
      setEditFurnitureId(null);
    } catch (error) {
      setMessage("Failed to create/update furniture. Please try again.");
      console.error("Error creating/updating furniture:", error);
    }
  };

  const openEditModal = (furniture) => {
    setFurnitureData(furniture);
    setIsModalOpen(true);
    setEditFurnitureId(furniture.furnitureId);
  };

  const deleteFurniture = async (furnitureId) => {
    try {
      await axios.delete(
        `http://localhost:8080/furniture/delete/${furnitureId}`
      );
      fetchFurniture();
    } catch (error) {
      console.error("Error deleting furniture:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add Furniture
      </button>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditFurnitureId(null);
        }}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="furnitureName" className="block text-gray-700">
              Furniture Name:
            </label>
            <input
              type="text"
              id="furnitureName"
              name="furnitureName"
              value={furnitureData.furnitureName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="form-group">
            <label htmlFor="details" className="block text-gray-700">
              Details:
            </label>
            <input
              type="text"
              id="details"
              name="details"
              value={furnitureData.details}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price" className="block text-gray-700">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={furnitureData.price}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file" className="block text-gray-700">
              Upload File:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleImageChange}
              required
              className="mt-1 block w-full"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              {editFurnitureId ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </FormModal>

      {message && <p className="text-red-500 mt-4">{message}</p>}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">All Furniture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {furnitureList.map((furniture) => (
            <div
              key={furniture.furnitureId}
              className="bg-white shadow-md rounded p-4"
            >
              <h3 className="text-xl font-semibold mb-2">
                {furniture.furnitureName}
              </h3>
              <p className="text-gray-700 mb-2">{furniture.details}</p>
              <p className="text-gray-900 font-bold mb-2">
                Price: ${furniture.price}
              </p>
              {furniture.imageData && (
                <div className="mb-4">
                  <img
                    src={`http://localhost:8080/furniture/image/${furniture.furnitureId}`}
                    alt={furniture.furnitureName}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      console.error(
                        `Error loading image for furniture ${furniture.furnitureId}`
                      );
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Image+Not+Found";
                    }}
                  />
                </div>
              )}
              <div className="flex justify-between">
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded"
                  onClick={() => openEditModal(furniture)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded"
                  onClick={() => deleteFurniture(furniture.furnitureId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Furniture;
