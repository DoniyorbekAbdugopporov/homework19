import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="bg-gray-50 dark:bg-gray-900 pt-32 pb-16">
        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to Flowbite
          </h2>
          <form className="mt-8 space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div className="ms-3 text-sm">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-500 dark:text-gray-400"
                >
                  Remember this device
                </label>
              </div>
              <a
                href="#"
                className="ms-auto text-sm font-medium text-green-600 hover:underline dark:text-green-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Not registered yet?{" "}
              <a className="text-green-600 hover:underline dark:text-green-500">
                Create account
              </a>
            </div>
          </form>
          <button
            className="text-green-600 hover:underline dark:text-green-500 font-medium"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
