import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status == 200) {
      setBook(response.data.data);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20  ">
        <img
          className="h-50 w-60"
          src={book.imageUrl}
          alt="Sunset in the mountains"
          width="100px"
          height="100px"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
          <p className="text-gray-700 text-base">
            Author name :{book.authorName}
          </p>
          <p className="text-gray-700 text-base">
            Book ISBN num :{book.isbnNumber}
          </p>
          <p className="text-gray-700 text-base">
            Publication:  {book.publication}
            </p>
            <p className="text-gray-700 text-base">
            Published At:  {book.publishedAt}
            </p>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
