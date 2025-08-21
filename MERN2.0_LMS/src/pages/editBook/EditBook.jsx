import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBook = () => {

  const {id} = useParams();
  console.log("Book id ",id);
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
      
      const response = await axios.patch("https://leapfrog-60-days-challege.onrender.com/book/"+ id ,formData)
      if(response.status===200){
        navigate("/book/"+ id)
      }else{
        alert("Something  went worng & Messy")
      }

    }

    const fetchBook = async()=>{
    const response =  await  axios.get("https://leapfrog-60-days-challege.onrender.com/book/"+ id)
    if(response.status===200){
      // console.log(response.data.data)  to check  the whether data is in the  table or no t
      setData(response.data.data)
    }

    }
    useEffect(()=>{
      fetchBook()

    },[])

  return (

    <>
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Edit Book</h2>
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
              value={data.bookName}
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
              value={data.bookPrice}
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
              value={data.isbnNumber}
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
              onChange={handleChange} value={data.authorName}
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
              onChange={handleChange} value={data.publication}
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
              value={data.publishedAt.split("T")[0]}
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
            Edit Book
          </button>
        </form>
      </div>
    </>
    
  );
};

export default EditBook;
