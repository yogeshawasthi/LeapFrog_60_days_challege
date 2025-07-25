import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config";

const AddBook = () => {
  // const [bookName, setBookName] = useState("");
  // const [bookPrice, setBookPrice] = useState("");
  // const [isbnNumber, setIsbnNumber] = useState(null);
  // const [authorName, setAuthorName] = useState("");
  // const [publishedAt, setPublishedAt] = useState("");
  // const [publication, setPublication] = useState("");
  // const [image, setImage] = useState(null);

  // const handleSubmit = async (e) => {
    //   e.preventDefault()
    //  const response = await axios.post('http://localhost:3000/book',{
    //     bookName,
    //     bookPrice,
    //     isbnNumber,
    //     authorName,
    //     publishedAt,
    //     publication,
    //     image
    //   },{
    //     headers : {
    //       'Content-Type' :'multipart/form-data'
    //     }
    //   })
    // }

    //next way to send form data
    // e.preventDefault()
    // const formData = new FormData() //{}
    // formData.append('bookName',bookName)
    // formData.append('bookPrice',bookPrice)
    // formData.append('isbnNumber',isbnNumber)
    // formData.append('authorName',authorName)
    // formData.append('publishedAt',publishedAt)
    // formData.append('image',image)
    // formData.append('publication',publication)

    // const response = await axios.post('http://localhost:3000/book',formData)

    // }

    //thrid way
    const navigate = useNavigate()
    const [data, setData] = useState({
      bookName: "",
      bookPrice: "",
      isbnNumber: null,
      authorName: "",
      publishedAt: "",
      publication: "",
    });
    const [image,setImage] = useState(null);

    const handleChange = async(e) => {
      const { name, value } = e.target;
      setData({
        ...data, 
        [name]: value
      });
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData()

      Object.entries(data).forEach(([key,value])=>{
        formData.append(key,value)

      })
      formData.append('image',image)
      
      const response = await axios.post(`${backendUrl}/book`,formData)
      if(response.status===201){
        navigate("/")
      }else{
        alert("Something went worng")
      }

    }
  
  
   return (
    <>
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add Book</h2>
        <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={(e)=>setImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBook;
