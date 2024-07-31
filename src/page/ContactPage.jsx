import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:8080/api/contacts", formData);
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("There was an error sending the message:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Office</h2>
            <p className="mb-2">
              123 Main Street,
              <br />
              Cityville, State, Zip Code
            </p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p className="mb-2">Email: info@example.com</p>
            <iframe
              title="map"
              className="w-full h-64 md:h-auto rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789101121314!2d-71.06141851879269!3d42.3549526144609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0U4MDAnNTUuMyJTIDcxcTQ1JzU4LjUiVw!5e0!3m2!1sen!2sus!4v1594673372826!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
            {status && (
              <p className={`mt-4 text-center ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
