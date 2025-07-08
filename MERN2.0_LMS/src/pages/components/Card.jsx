import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Card = ({book}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-10" key={book._id}>
            <img className="w-full" src={book.imageUrl ? book.imageUrl:"https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.bookName}</div>
                <p className="text-gray-700 text-base">
                   Rs.  {book.bookPrice} <br />
                   
                </p>
                <p className="text-gray-700 text-base">
                    Author name : {book.authorName}
                   
                </p>
                <p className="text-gray-700 text-base">
                    Book ISBN num : {book.isbnNumber}
                </p>
                {/* <button onClick={() => navigate('/book')}>See More</button> */}
                <Link to={`/book/${book._id}`} className='bg-green-600 rounded-xl p-1 m-1 text-white'>See More </Link>
                <button className='bg-red-600 rounded-xl p-1 m-1 text-white'>Delete</button>
            </div>

        </div>

    )
}

export default Card
