import React from 'react'

const Card = ({book}) => {
    console.log(book);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-10" key={book._id}>
            <img className="w-full" src="https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg" alt="Sunset in the mountains" />
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
            </div>

        </div>

    )
}

export default Card
