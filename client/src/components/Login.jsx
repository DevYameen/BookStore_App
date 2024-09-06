import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Use navigate for redirection

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const bookApiUrl = import.meta.env.VITE_BOOK_API_URL;
    await axios
      .post(`${bookApiUrl}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully");

          navigate("/"); // Redirect to Home
          localStorage.setItem("Users", JSON.stringify(res.data.user));

          // Redirect to Home page after login
          setTimeout(() => {
            window.location.reload(); // Optional if you want to refresh the page
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="modal-box bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-fit shadow-lg rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white text-gray-800"
          >
            ✕
          </Link>

          {/* Heading */}
          <h3 className="font-bold text-lg dark:text-white text-gray-800">
            Login
          </h3>

          {/* Email Field */}
          <div className="mt-4 space-y-2">
            <span className="dark:text-gray-300 text-gray-700">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-2 ">
            <span className="dark:text-gray-300 text-gray-700">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 dark:bg-pink-600 dark:hover:bg-pink-700 duration-200">
              Login
            </button>
            <p className="dark:text-gray-300 text-gray-800">
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer dark:text-blue-400"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
