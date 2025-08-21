import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get('https://leapfrog-60-days-challege.onrender.com/book')

    if (response.status == 200) {
      setBooks(response.data.data)
    }

  }

  useEffect(() => {
    fetchBooks()// usse state hook is implimented here 
  }, [])


  console.log(books)

  return (
    <>
      <Navbar />
      <div className='flex flex-wrap justify-evenly mt-20 bg-bla'>

        {
          books.length >0 && books.map((book)=>{
            return(
              <Card  book={book}/>
            )
          })
        }

      </div>

    </>
  )
}

export default Home
