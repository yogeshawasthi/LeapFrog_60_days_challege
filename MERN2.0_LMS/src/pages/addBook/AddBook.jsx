import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [isbnNumber, setIsbnNumber] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [publication, setPublication] = useState("");
  const [image,setImage] = useState(null)
  return (
    <>
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>
        <form>
          <div className="mb-4">
            <label
              for="name"
              className="block text-sm font-medium text-gray-600"
            >
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              for="bookPrice"
              className="block text-sm font-medium text-gray-600"
            >
              Book Price
            </label>
            <input
              type="number"
              id="bookPrice"
              name="bookPrice"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-6">
            <label
              for="isbnNumber"
              className="block text-sm font-medium text-gray-600"
            >
              ISBN Number
            </label>
            <input
              type="number"
              id="isbnNumber"
              name="isbnNumber"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-6">
            <label
              for="authorName"
              className="block text-sm font-medium text-gray-600"
            >
              AuthorName
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-6">
            <label
              for="publication"
              className="block text-sm font-medium text-gray-600"
            >
              Publication
            </label>
            <input
              type="text"
              id="publication"
              name="publication"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-6">
            <label
              for="publishedAt"
              className="block text-sm font-medium text-gray-600"
            >
              Published At
            </label>
            <input
              type="date"
              id="publishedAt"
              name="publishedAt"
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
            />
          </div>
          <div className="mb-6">
            <label
              for="bookImage"
              className="block text-sm font-medium text-gray-600"
            >
              Book Image
            </label>
            <input
              type="file"
              id="bookImage"
              name="image" //important should be same as backend
              className="mt-1 p-2 w-full border rounded-md text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
