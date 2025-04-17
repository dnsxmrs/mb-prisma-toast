import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10 flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Header */}
        <header className="flex justify-between items-center px-4 sm:px-8 py-6">
          <div className="flex items-center">
            <Image
              src="/images/magandang-buhay-rbg.png"
              alt="Magandang Buhay Logo"
              width={40}
              height={40}
              className="w-10 h-10 mr-2"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
              Magandang Buhay!
            </h1>
          </div>
          <Link href="/sign-in">
            <button className="bg-white border border-gray-200 text-xs sm:text-base text-gray-700 rounded-full px-4 sm:px-6 py-2 font-medium hover:bg-gray-50 transition duration-200">
              Sign In
            </button>
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-4xl mx-auto px-4 pt-12 pb-20 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Magandang Buhay!
            <br />
          </h2>

          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 leading-snug">
            Kuwento at Kaalaman
            <br />
            Para sa Kabataang Pilipino
          </h3>

          <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Start learning now!
          </p>

          {/* Code Input Field */}
          <div className="max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Enter your code here"
              className="w-full px-5 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full px-6 sm:px-8 py-2 sm:py-3 transition duration-200">
            Submit Code
          </button>
        </main>

        {/* Footer */}
        <footer className="bg-blue-200 text-gray-700 py-4 mt-auto">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Magandang Buhay.
              All rights reserved.
            </p>

            <div className="flex items-center justify-center space-x-4">
              <a
                href="mailto:valerieannesangalang14@gmail.com"
                className="text-sm hover:underline"
              >
                valerieannesangalang14@gmail.com
              </a>
              <a
                href="#"
                className="hover:text-blue-600"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-7H8v-2.88h2.44V9.41c0-2.4 1.43-3.74 3.61-3.74 1.05 0 2.14.19 2.14.19v2.35h-1.21c-1.2 0-1.57.75-1.57 1.52v1.82H17l-.32 2.88h-2.22v7C18.34 21.13 22 17 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-blue-400"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.71 1.04 4.26 4.26 0 00-7.32 3.88A12.1 12.1 0 013 4.9a4.25 4.25 0 001.32 5.68 4.22 4.22 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.29 4.29 0 01-1.93.07 4.27 4.27 0 003.98 2.96 8.55 8.55 0 01-6.3 1.76A12.07 12.07 0 0012 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.35 8.35 0 0024 6.4a8.38 8.38 0 01-2.54.7z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
