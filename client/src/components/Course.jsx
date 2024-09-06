import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const bookApiUrl = import.meta.env.VITE_BOOK_API_URL;
    const getBook = async () => {
      try {
        const res = await axios.get(`${bookApiUrl}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      {/* Full page height container to ensure the background adapts fully */}
      <div className="bg-white dark:bg-gray-800 text-black min-h-screen">
        {/* Add padding or margin if necessary to separate from navbar */}
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl  text-black dark:text-white md:text-4xl">
              We're delighted to have you{" "}
              <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="text-black dark:text-white mt-12">
              Explore Our Collection of Books Welcome to our diverse selection
              of books! Whether you're a lifelong learner, an avid reader, or
              just curious, we have something for everyone.
              <br />
              Free Books: Dive into our collection of no-cost resources. These
              books cover a range of exciting topics—from magical stories to
              creative guides—perfect for those who love to explore new worlds
              without spending a dime.
              <br />
              Paid Books: For those looking to deepen their knowledge or explore
              new interests, our paid books offer comprehensive insights into
              various subjects, including technology, health, and finance. Each
              book is thoughtfully curated to provide valuable information and
              enhance your learning experience.
              <br />
              Feel free to browse through our categories, read the descriptions,
              and find the perfect book that matches your interests. Whether
              you’re here to learn something new or find inspiration, we’re here
              to help you on your journey!
              <br />
              Happy Reading!
            </p>
            <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
