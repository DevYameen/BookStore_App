import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="bg-pink-50 py-12 px-6 md:px-12 relative">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg overflow-hidden relative">
                <div className="relative mb-8">
                    <button
                        onClick={handleClose}
                        className="absolute right-4 top-4 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-pink-700 transition duration-300 ease-in-out"
                    >
                        ✕
                    </button>
                    <h1 className="text-4xl font-extrabold text-center text-pink-700">
                        About Us
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Welcome to our <span className="text-pink-500">Bookstore App!</span> We are dedicated to providing a comprehensive and user-friendly platform for book lovers. Our application allows you to browse a wide selection of books, manage your book collection, and discover new titles based on your interests.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong className="text-pink-700">Features:</strong>
                            <ul className="list-disc list-inside mt-2 space-y-2">
                                <li>Search and filter books by title, author, and genre.</li>
                                <li>Add books to your personal collection and keep track of your reading progress.</li>
                                <li>Receive personalized recommendations based on your reading history.</li>
                                <li>Enjoy a clean and intuitive user interface for seamless navigation.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://png.pngtree.com/png-clipart/20210912/ourlarge/pngtree-bookstore-books-books-png-image_3916809.jpg"
                            alt="Books"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our goal is to make your book browsing and reading experience as enjoyable as possible. If you have any questions or feedback, feel free to{' '}
                        <a href="/contact" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 transition duration-300 ease-in-out">
                            contact us
                        </a>.
                    </p>
                    <p className="text-gray-700 text-lg mt-4">
                        <span className="text-pink-500">Thank you</span> for choosing our <span className="text-pink-500">Bookstore App.</span> <span className="text-pink-700">Happy reading!</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
