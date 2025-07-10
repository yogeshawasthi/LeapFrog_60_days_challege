import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get(`https://leapfrog-60-days-challege.onrender.com/book/${id}`);
    if (response.status == 200) {
      setBook(response.data.data);
    }
  };
  const deleteHandle = async () => {
    const response = await axios.delete("https://leapfrog-60-days-challege.onrender.com/book/" + id);
    if (response.status === 200) {
      console.log("Deleted ");
      navigate("/");
    }
  }
  const goBack = ()=>{
     navigate("/");
  }

  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 border-2 ">
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
            <button onClick={deleteHandle} className="bg-red-800 p-2 text-white rounded-lg">Delete</button>
            <Link to={`/editBook/${book._id}`}>
            <button className="bg-blue-800 p-2 ml-2 text-white rounded-lg">Edit</button>
           </Link>
            <button  onClick={goBack} className="bg-green-700 p-2 ml-2 text-white rounded-lg">Go Back</button>
            
            
        </div>
      </div>
    </>
  );
};

export default SingleBook;
