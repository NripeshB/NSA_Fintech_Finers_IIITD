import React from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import Banner from "../partials/Banner";

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Site header */}
      <Header />

      {/* Page content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <section className="relative bg-white/10 backdrop-blur-lg shadow-xl rounded-3xl p-10 w-full max-w-md border border-white/20">
          {/* Page header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Join Finvestor
            </h1>
            <p className="text-gray-300 text-sm mt-2">
              The premium way to invest smarter.
            </p>
          </div>

          {/* Form */}
          <form className="mt-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full bg-white/20 text-white rounded-lg py-2 px-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all">
                Sign Up
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="text-sm mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign-in redirect */}
          <p className="text-center text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-400 hover:underline transition"
            >
              Sign in
            </Link>
          </p>
        </section>
      </main>

      <Banner />
    </div>
  );
}

export default SignUp;
