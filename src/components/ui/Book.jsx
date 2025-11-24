import React from 'react';
import { Link } from "react-router-dom";
import Rating from "./Book.jsx";
import Price from "./Price.jsx";

const Book = ({ book }) => {
    console.log(book.url)
    return (
        <div>
            <div className="book">
                <Link to="/books/1">
                    <figure className="book__img--wrapper">
                        <img src={book.url} alt="" className="book__img" />
                    </figure>
                </Link>
                <div className="book__title">
                    <Link to="/books/1" className="book__title--link">
                        {book.title}
                    </Link>
                </div>
               <Rating rating={book.rating} />
               <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
            </div>
        </div>
    );
}

export default Book;